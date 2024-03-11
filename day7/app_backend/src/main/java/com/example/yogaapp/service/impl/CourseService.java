package com.example.yogaapp.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.example.yogaapp.model.CourseModel;
import com.example.yogaapp.model.UserModel;
import com.example.yogaapp.repository.CourseRepo;
import com.example.yogaapp.repository.UserModelRepo;

@Service
public class CourseService {
    @Autowired
    private CourseRepo courseRepo;

    @Autowired
    private UserModelRepo userModelRepository;

    public List<CourseModel> getAllCourses() {
        return courseRepo.findAll();
    }

    public CourseModel getCourseById(int courseId) {
        return courseRepo.findById(courseId).orElse(null);
    }

    public CourseModel createCourse(CourseModel course) {
        return courseRepo.save(course);
    }

    public CourseModel updateCourse(int courseId, CourseModel updatedCourse) {
        if (courseRepo.existsById(courseId)) {
            updatedCourse.setCourseId(courseId);
            return courseRepo.save(updatedCourse);
        } else {
            return null; // Course not found
        }
    }

    public boolean deleteCourse(int courseId) {
        if (courseRepo.existsById(courseId)) {
            courseRepo.deleteById(courseId);
            return true;
        } else {
            return false; // Course not found
        }
    }

    public boolean optForCourse(String userEmail, int courseId) throws NotFoundException {
        // Find the user by email
        UserModel user = userModelRepository.findByUserEmail(userEmail)
                .orElseThrow(() -> new NotFoundException());

        // Find the course by ID
        CourseModel course = courseRepo.findById(courseId)
                .orElseThrow(() -> new NotFoundException());

        // Add course to user's opted courses
        List<CourseModel> optedCourses = user.getOptedCourses();
        if (optedCourses == null) {
            optedCourses = new ArrayList<>();
        }
        optedCourses.add(course);
        user.setOptedCourses(optedCourses);

        // Save user model
        userModelRepository.save(user);

        return true;
    }

    // public List<UserModel> getUsersOptedForCourse(int courseId) {
    // Optional<CourseModel> courseOptional = courseRepo.findById(courseId);
    // if (courseOptional.isPresent()) {
    // CourseModel course = courseOptional.get();
    // return course.getOptedUsers();
    // } else {
    // // Handle the case where the course is not found
    // return null;
    // }
    // }
}
