package com.example.yogaapp.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.yogaapp.model.AdminModel;
import com.example.yogaapp.model.Role;
import com.example.yogaapp.model.User;
import com.example.yogaapp.repository.AdminRepo;
import com.example.yogaapp.repository.UserRepo;

@Service
public class AdminService {
    @Autowired
    AdminRepo adminRepo;
    @Autowired
    UserRepo userRepo;

    public Optional<AdminModel> getAdmin(int id) {
        return adminRepo.findById(id);
    }

    public List<AdminModel> getAllAdmin() {
        return (List<AdminModel>) adminRepo.findAll();
    }

    public List<User> getAllAdminWithAdminAccess() {
        return userRepo.findAllByRole(Role.ADMIN);
    }

    public List<User> getAllUsersWithAdminAccess() {
        return userRepo.findAllByRole(Role.USER);
    }

    public String updateAdmin(AdminModel adminModel) {
        Optional<User> user = userRepo.findByEmail(adminModel.getUser().getEmail());
        if (user.isEmpty()) {
            return "User not found";
        }
        user.get().setName(adminModel.getUser().getName());
        userRepo.save(user.get());
        Optional<AdminModel> admin = adminRepo.findByUser(user.get());
        admin.get().setMobileNumber(adminModel.getMobileNumber());
        adminRepo.save(admin.get());
        return "Updated successfully";
    }

}
