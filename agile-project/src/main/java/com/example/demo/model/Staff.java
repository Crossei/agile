package com.example.demo.model;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Staff {
	@Id
	private String staff_id;
	private String username;
	private String pass;
	private String fullname;
	private int role;
	public String getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(String staff_id) {
		this.staff_id = staff_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public int getRole() {
		return role;
	}
	public void setRole(int role) {
		this.role = role;
	}
	public Staff(String staff_id, String username, String pass, String fullname, int role) {
		super();
		this.staff_id = staff_id;
		this.username = username;
		this.pass = pass;
		this.fullname = fullname;
		this.role = role;
	}
	public Staff() {
		
	}
	@Override
	public String toString() {
		return "Staff [staff_id=" + staff_id + ", username=" + username + ", pass=" + pass + ", fullname=" + fullname
				+ ", role=" + role + "]";
	}
	
	
	
	
	
}