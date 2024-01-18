package com.example.demo.service;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getEmployees(){
        return employeeRepository.findAll();
    }

    public Employee addEmployee(Employee employee) {
        Optional<Employee> EmployeeByEmail = employeeRepository.findEmployeeByEmail(employee.getEmail());
        if (EmployeeByEmail.isPresent()){
            throw new IllegalStateException("Email has been taken");
        }
        employeeRepository.save(employee);
        return employee;
    }

    @Transactional
    public Employee updateEmployee(Employee employee, Long id) {
        boolean exists = employeeRepository.existsById(id);
        if(exists){
            employeeRepository.save(employee);
        } else{
            throw new IllegalStateException("No Employee found");
        }
        return employee;
    }

    public void deleteEmployee(Long id) {
        boolean exists = employeeRepository.existsById(id);
        if(exists){
            employeeRepository.deleteById(id);
        } else{
            throw new IllegalStateException("No Employee found");
        }
    }
}

