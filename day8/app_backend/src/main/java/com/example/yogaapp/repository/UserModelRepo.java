package com.example.yogaapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.yogaapp.model.User;
import com.example.yogaapp.model.UserModel;

public interface UserModelRepo extends JpaRepository<UserModel, Integer> {
    Optional<UserModel> findByUser(User user);

    Optional<UserModel> findByUserEmail(String email);

    // @Query(value = "SELECT c FROM UserModel c WHERE c.user.id=?1")
    // List<CourseModel> findCourseById(int id);
}
