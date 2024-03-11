package com.example.yogaapp.controller;

import com.example.yogaapp.model.InstituteModel;
import com.example.yogaapp.service.impl.InstituteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/institutes")
public class InstituteController {

    @Autowired
    private InstituteService instituteService;

    @GetMapping
    public ResponseEntity<List<InstituteModel>> getAllInstitutes() {
        List<InstituteModel> institutes = instituteService.getAllInstitutes();
        return new ResponseEntity<>(institutes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<InstituteModel> getInstituteById(@PathVariable int id) {
        Optional<InstituteModel> institute = instituteService.getInstituteById(id);
        return institute.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<InstituteModel> createInstitute(@RequestBody InstituteModel institute) {
        InstituteModel createdInstitute = instituteService.createInstitute(institute);
        return new ResponseEntity<>(createdInstitute, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<InstituteModel> updateInstitute(@PathVariable int id,
            @RequestBody InstituteModel updatedInstitute) {
        InstituteModel institute = instituteService.updateInstitute(id, updatedInstitute);
        if (institute != null) {
            return new ResponseEntity<>(institute, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInstitute(@PathVariable int id) {
        instituteService.deleteInstitute(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
