import { Component, VERSION, OnInit, ViewChild , AfterViewInit } from '@angular/core';
import { AccountService } from './account.service';
import { Router, RouterLink } from '@angular/router';
import { Staff } from './staff';
import { DangnhapComponent } from './dangnhap/dangnhap.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(public _service : AccountService,
    private _route: Router) { }
    username =  sessionStorage.getItem("username");
    role = parseInt(sessionStorage.getItem("role"));
    staff_id = sessionStorage.getItem("staff_id");
    
    //      this.staff.username = sessionStorage.getItem("username");
    //      this.staff.role = parseInt(sessionStorage.getItem("role"));
    //      
    ngOnInit(){
      console.log(sessionStorage.getItem("username"))
      console.log(sessionStorage.getItem("role"));
    }
         
     role0(){
       if(this.role == 0)
       return true;
     } 
     role1(){
      if(this.role == 1)
      return true;
    } 
    role2(){
      if(this.role == 2)
      return true;
    } 
    role3(){
      if(this.role == 3)
      return true;
    } 
              
    
  
  name = 'Angular ' + VERSION.major;
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('role')
    this._route.navigate([''])
  }
}
