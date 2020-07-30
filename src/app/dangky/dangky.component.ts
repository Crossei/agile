import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {

  dangnhapForm = new FormGroup({
    user: new FormControl(''),
    pass: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

}
