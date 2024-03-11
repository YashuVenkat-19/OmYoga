package com.example.yogaapp.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestController;

import com.example.yogaapp.model.CourseModel;
import com.example.yogaapp.model.UserModel;
import com.example.yogaapp.service.impl.CourseService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/all")
    public ResponseEntity<List<CourseModel>> getAllCourses() {
        List<CourseModel> courses = courseService.getAllCourses();
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseModel> getCourseById(@PathVariable("id") int courseId) {
        CourseModel course = courseService.getCourseById(courseId);
        if (course != null) {
            return new ResponseEntity<>(course, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<CourseModel> createCourse(@RequestBody CourseModel course) {
        CourseModel createdCourse = courseService.createCourse(course);
        return new ResponseEntity<>(createdCourse, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseModel> updateCourse(@PathVariable("id") int courseId,
            @RequestBody CourseModel updatedCourse) {
        CourseModel course = courseService.updateCourse(courseId, updatedCourse);
        if (course != null) {
            return new ResponseEntity<>(course, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable("id") int courseId) {
        boolean deleted = courseService.deleteCourse(courseId);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/optForCourse")
    public ResponseEntity<?> optForCourse(@RequestBody Map<String, Integer> request) {
        try {
            int courseId = request.get("courseId");
            // Get the authenticated user's email from the security context
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String userEmail = authentication.getName();

            boolean optedSuccessfully = courseService.optForCourse(userEmail, courseId);
            return ResponseEntity.ok(optedSuccessfully);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User or course not found");
        }
    }

    // @GetMapping("/{courseId}/users")
    // public List<UserModel> getUsersOptedForCourse(@PathVariable int courseId) {
    // return courseService.getUsersOptedForCourse(courseId);
    // }

}
