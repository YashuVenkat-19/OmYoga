package com.example.yogaapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.yogaapp.model.CourseModel;
import com.example.yogaapp.model.User;
import com.example.yogaapp.model.UserModel;
import com.example.yogaapp.service.impl.AdminService;
import com.example.yogaapp.service.impl.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private AdminService adminService;

    @GetMapping("/user-details")
    public ResponseEntity<UserModel> getUserDetails() {
        // Get the authenticated user's email from the security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userEmail = authentication.getName();

        // Call the service layer to fetch user details by email
        UserModel userDetails = userService.getUserDetailsByEmail(userEmail);

        // Check if user details exist and return the response accordingly
        if (userDetails != null) {
            return new ResponseEntity<>(userDetails, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{userId}/opted-courses")
    public ResponseEntity<List<CourseModel>> getOptedCoursesByUserId(@PathVariable int userId) {
        List<CourseModel> optedCourses = userService.getOptedCoursesByUserId(userId);
        return new ResponseEntity<>(optedCourses, HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/allAdmins")
    public List<User> getAllAdminWithAdminAccess() {
        return adminService.getAllAdminWithAdminAccess();
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/allUsers")
    public ResponseEntity<List<User>> getAllUsersWithAdminAccess() {
        List<User> users = adminService.getAllUsersWithAdminAccess();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

}
