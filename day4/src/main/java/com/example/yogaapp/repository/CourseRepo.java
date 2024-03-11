package com.example.yogaapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.yogaapp.model.CourseModel;
import com.example.yogaapp.model.UserModel;

@Repository
public interface CourseRepo extends JpaRepository<CourseModel, Integer> {

    // List<UserModel> getUsersOptedForCourse(int courseId);

}