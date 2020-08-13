import { Component, VERSION, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  constructor(public _service : AccountService,
    private _route: Router) { }

  ngOnInit() {
  }
  name = 'Angular ' + VERSION.major;
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('role')
    this._route.navigate([''])
  }
}
