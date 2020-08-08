package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Staff;
import com.example.demo.repository.StaffRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class registerController {
	
	@Autowired
	StaffRepository repo;
	
	@PostMapping("/dangky")
	public Staff dangkyStaff(@RequestBody Staff staff) {
		Staff staffObj = repo.save(staff);
		return staffObj;
	}
	@PostMapping("/dangnhap")
	public Staff dangnhapStaff(@RequestBody Staff staff) throws Exception {
		String username = staff.getUsername();
		String pass = staff.getPass();
		Staff staffObj = null;
		if(username != null && pass != null) {
		staffObj = repo.findByUsernameAndPass(username, pass);
		}
		if(staffObj == null) {
			throw new Exception("Bad Credentials");
		}
		return staffObj;
	}
	
	
}
