import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { Staff } from '../staff';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
  styleUrls: ['./thongtin.component.css']
})
export class ThongtinComponent implements OnInit {

  constructor(private _service : AccountService,
    private _router : Router,
    private _actRout : ActivatedRoute) { }
    staff = new Staff();
    btnDisable: boolean = false;
    thongtinForm = new FormGroup({
      fullname: new FormControl(''),
      phone: new FormControl(''),
      username: new FormControl(''),
      address: new FormControl(''),
      birth: new FormControl('')
    })
  ngOnInit(): void {
    this._actRout.paramMap.subscribe(params => {
      let thongtinId = params.get('staff_id');
      this._service.getUserFromRemote(thongtinId).subscribe( data => {
        console.log(data);
        this.staff = data
        
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
