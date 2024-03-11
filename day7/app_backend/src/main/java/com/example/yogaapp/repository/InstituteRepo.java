package com.example.yogaapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.yogaapp.model.InstituteModel;

@Repository
public interface InstituteRepo extends JpaRepository<InstituteModel, Integer> {
    // Custom query methods if needed
}
