package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Staff;

public interface StaffRepository  extends JpaRepository<Staff, String>{
		public Staff findByUsernameAndPass(String username, String pass);
}
