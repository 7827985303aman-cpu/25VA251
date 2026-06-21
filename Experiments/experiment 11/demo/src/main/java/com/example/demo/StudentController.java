package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class StudentController {

    // GET - Welcome message
    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Student Management REST API!";
    }

    // GET - Return student details
    @GetMapping("/student")
    public Student getStudent() {
        return new Student(1, "Aarav Sharma", "B.Tech Computer Science");
    }

    // POST - Accept student data
    @PostMapping("/student")
    public String addStudent(@RequestBody Student student) {
        return "Student added: " + student.getName() + " | Course: " + student.getCourse();
    }
}
