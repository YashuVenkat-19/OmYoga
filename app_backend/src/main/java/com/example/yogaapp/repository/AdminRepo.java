package com.example.yogaapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.yogaapp.model.AdminModel;
import com.example.yogaapp.model.User;

public interface AdminRepo extends JpaRepository<AdminModel, Integer> {
   Optional<AdminModel> findByUser(User user);

   Optional<AdminModel> findByUserEmail(String email);
}
