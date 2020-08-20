import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { Staff } from '../staff';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
  styleUrls: ['./thongtin.component.css']
})
export class ThongtinComponent implements OnInit {

  constructor(private _service : AccountService,
    private _router : Router,
    private _actRout : ActivatedRoute,
    public datepipe: DatePipe) { }
    staff = new Staff();
    btnDisable: boolean = false;
    thongtinForm = new FormGroup({
      fullname: new FormControl(''),
      phone: new FormControl(''),
      username: new FormControl(''),
      address: new FormControl(''),
      birth: new FormControl('')
    })
    birth1 : string;
  ngOnInit(): void {
    this._actRout.paramMap.subscribe(params => {
      let thongtinId = params.get('staff_id');
      this._service.getUserFromRemote(thongtinId).subscribe( data => {
        console.log(data);
        this.staff = data
        
        this.birth1 =  this.datepipe.transform(this.staff.birth, 'yyyy-MM-dd')
         console.log(this.birth1);
      })
    })
  }
  

  updateThongtin(){
      
      this._service.updateUserFromRemote(this.staff).subscribe( data => {
        console.log(data);
        this._router.navigate(['/'])        
      })
    
  }

}
