import { Component, VERSION, OnInit, ViewChild , AfterViewInit } from '@angular/core';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
import { Staff } from './staff';
import { DangnhapComponent } from './dangnhap/dangnhap.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  constructor(public _service : AccountService,
    private _route: Router) { }
    staff = new Staff();
    @ViewChild(DangnhapComponent) dangnhap;
  ngAfterViewInit(){
    this.staff = this.dangnhap.staff;
    console.log(this.staff)
  }
  
  name = 'Angular ' + VERSION.major;
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('role')
    this._route.navigate([''])
  }
}
