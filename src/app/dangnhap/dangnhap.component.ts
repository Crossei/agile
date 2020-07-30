import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  dangnhapForm = new FormGroup({
    user: new FormControl(''),
    pass: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
  }
  bg1="./assets/image/bg-3.jpg"; 
}
