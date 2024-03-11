package com.example.yogaapp.service.impl;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.yogaapp.model.CourseModel;
import com.example.yogaapp.model.User;
import com.example.yogaapp.model.UserModel;
import com.example.yogaapp.repository.UserModelRepo;
import com.example.yogaapp.repository.UserRepo;

@Service

public class UserService {

    @Autowired
    UserModelRepo userRepository;
    @Autowired
    UserRepo userRepo;

    public UserModel getUserDetailsByEmail(String email) {
        return userRepository.findByUserEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with email: " + email));
    }

    public String addUser(UserModel userModel) {
        userRepository.save(userModel);
        // userRepo.save("Hello");
        return "Successfully added";
    }

    // public Optional<UserModel> getUser(String email) {
    // return userRepository.findByUserEmail(email);
    // }

    public List<UserModel> getAllUser() {
        return userRepository.findAll();
    }

    public String updateUserModel(UserModel userModel) {
        Optional<User> user = userRepo.findByEmail(userModel.getUser().getEmail());
        System.out.println(user);
        if (user.isEmpty()) {
            return "User Not Found";
        }
        user.get().setName(userModel.getUser().getName());
        userRepo.save(user.get());
        Optional<UserModel> userModelRepo = userRepository.findByUser(user.get());
        userModelRepo.get().setMobileNumber(userModel.getMobileNumber());
        userRepository.save(userModelRepo.get());
        return "Updated Successfully";
    }

    public List<CourseModel> getUserCoursesByUserId(Integer userId) {
        Optional<UserModel> userModelOptional = userRepository.findById(userId);
        if (userModelOptional.isPresent()) {
            UserModel userModel = userModelOptional.get();
            return userModel.getOptedCourses(); // This method needs to be implemented
        }
        return new ArrayList<>();
    }

    public List<CourseModel> getOptedCoursesByUserId(Integer userId) {
        Optional<UserModel> userModelOptional = userRepository.findById(userId);
        return userModelOptional.map(UserModel::getOptedCourses).orElse(new ArrayList<>());
    }

}