import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quanly',
  templateUrl: './quanly.component.html',
  styleUrls: ['./quanly.component.css']
})
export class QuanlyComponent implements OnInit {

  staffs=[];
  
  xoaDisabled(username){
      if(username == "admin"){
      return true;
      }
  };

  constructor(private _service : AccountService,
    private _route : Router) { }

  ngOnInit(): void {
    this._service.quanlyUserFromRemote().subscribe(data =>{
      this.staffs = data
    })
  }

  removeStaff(staff){
    let conf = confirm("Bạn muốn xóa người dùng này?");
    if (conf == true) {
    this._service.removeUserFromRemote(staff.staff_id).subscribe(data =>{
      this.ngOnInit();
    })
    }
  }

}
