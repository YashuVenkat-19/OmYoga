package com.example.yogaapp.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "institutes")
public class InstituteModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "institute_id")
    private int instituteId;

    private String instituteName;
    private String instituteLocation;
    private String instituteContact;

    @OneToMany
    @JoinTable(name = "institute_users", joinColumns = @JoinColumn(name = "institute_id"), inverseJoinColumns = @JoinColumn(name = "user_model_id"))
    private List<CourseModel> courses;

}