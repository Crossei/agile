import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { AccountService } from '../account.service';
import { Staff } from '../staff';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  staff = new Staff();

  dangnhapForm = new FormGroup({
    user: new FormControl(''),
    pass: new FormControl('')
  })

  constructor(private _service : AccountService) { }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
  }
  bg1="./assets/image/bg-3.jpg"; 
  loginUser(){
      this._service.loginUserFromRemote(this.staff).subscribe(
        data => console.log("respones recevied"),
        error => console.log("exception ocurred")
      )
  }
}
