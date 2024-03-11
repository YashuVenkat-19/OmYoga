package com.example.yogaapp.service.impl;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.yogaapp.dto.request.AuthenticationRequest;
import com.example.yogaapp.dto.request.RegisterRequest;
import com.example.yogaapp.dto.response.AuthenticationResponse;
import com.example.yogaapp.model.AdminModel;
import com.example.yogaapp.model.Role;
import com.example.yogaapp.model.User;
import com.example.yogaapp.model.UserModel;
import com.example.yogaapp.repository.AdminRepo;
import com.example.yogaapp.repository.UserModelRepo;
import com.example.yogaapp.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
        private final UserModelRepo userModelRepository;
        private final AdminRepo adminModelRepository;
        private final UserRepo userRepository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;

        public AuthenticationResponse register(RegisterRequest request) {
                if (request.getUserRole().equalsIgnoreCase("user")) {
                        var user = User
                                        .builder()
                                        .name(request.getName())
                                        .email(request.getEmail())
                                        .password(passwordEncoder.encode(request.getPassword()))
                                        .role(Role.USER)
                                        .build();
                        // System.out.println(request.getUserRole() + "=================" + user);
                        Optional<User> existing = userRepository.findByEmail(request.getEmail());
                        if (!existing.isEmpty()) {
                                return AuthenticationResponse.builder()
                                                .token("Email Already exists")
                                                .build();
                        }
                        User savedUser = userRepository.save(user);
                        UserModel userModel = new UserModel();
                        userModel.setMobileNumber(request.getMobileNumber());
                        userModel.setUser(savedUser);
                        userModelRepository.save(userModel);
                        var jwtToken = jwtService.generateToken(user);

                        return AuthenticationResponse.builder()
                                        .token(jwtToken)
                                        .userRole(request.getUserRole())
                                        .build();
                }
                var user = User
                                .builder()
                                .name(request.getName())
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(Role.ADMIN)
                                .build();
                Optional<User> existing = userRepository.findByEmail(request.getEmail());
                if (!existing.isEmpty()) {
                        return AuthenticationResponse.builder()
                                        .token("Email Already exists")
                                        .userRole(request.getUserRole())
                                        .build();
                }
                User savedUser = userRepository.save(user);
                // System.out.println(savedUser.getRole() + "++++++++++++++++++++++++++++++");
                AdminModel adminModel = new AdminModel();
                adminModel.setMobileNumber(request.getMobileNumber());
                adminModel.setUser(savedUser);
                adminModelRepository.save(adminModel);
                var jwtToken = jwtService.generateToken(user);

                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .userRole(request.getUserRole())
                                .build();
        }

        public AuthenticationResponse authenticate(AuthenticationRequest request) {
                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
                var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
                if (request.getRole().equalsIgnoreCase("admin") && user.getRole() != Role.ADMIN) {
                        return AuthenticationResponse.builder()
                                        .token("Invalid Credentials")
                                        .build();
                }
                if (request.getRole().equalsIgnoreCase("user") && user.getRole() != Role.USER) {
                        return AuthenticationResponse.builder()
                                        .token("Invalid Credentials")
                                        .build();
                }
                var jwtToken = jwtService.generateToken(user);
                var userRole = (user.getRole() == Role.ADMIN) ? "admin" : "user";
                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .userRole(userRole)
                                .build();
        }
}
