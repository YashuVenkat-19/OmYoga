package com.example.yogaapp.service.impl;

import com.example.yogaapp.model.InstituteModel;
import com.example.yogaapp.repository.InstituteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstituteService {

    @Autowired
    private InstituteRepo instituteRepository;

    public List<InstituteModel> getAllInstitutes() {
        return instituteRepository.findAll();
    }

    public Optional<InstituteModel> getInstituteById(int id) {
        return instituteRepository.findById(id);
    }

    @SuppressWarnings("null")
    public InstituteModel createInstitute(InstituteModel institute) {
        return instituteRepository.save(institute);
    }

    public InstituteModel updateInstitute(int id, InstituteModel updatedInstitute) {
        Optional<InstituteModel> existingInstitute = instituteRepository.findById(id);
        if (existingInstitute.isPresent()) {
            updatedInstitute.setInstituteId(id);
            return instituteRepository.save(updatedInstitute);
        } else {
            return null; // Handle error appropriately
        }
    }

    public void deleteInstitute(int id) {
        instituteRepository.deleteById(id);
    }
}
