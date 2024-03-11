package com.example.yogaapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.yogaapp.model.Role;
import com.example.yogaapp.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);

    List<User> findAllByRole(Role role);

}
