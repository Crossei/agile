import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {

  dangkyForm = new FormGroup({
    user: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/)
      
    ]),
    pass: new FormControl(''),
    number: new FormControl('',[
      Validators.required,
      Validators.maxLength(11),
      Validators.pattern(/^[0-9]/)
    ]),
    address: new FormControl('',[
      Validators.minLength(4),
      Validators.pattern(/^[0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/)
    ])
  })

  get user() {return this.dangkyForm.get('user');}
  get number() {return this.dangkyForm.get('number');}
  get address() {return this.dangkyForm.get('address');}

  constructor() { }

  ngOnInit(): void {
  }

}
