import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Staff } from './staff';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(staff : Staff):Observable<any>{
      return this._http.post<any>("http://localhost:8080/dangnhap",staff)
  }

  public registerUserFromRemote(staff : Staff):Observable<any>{
    return this._http.post<any>("http://localhost:8080/dangky",staff)
}

 
}
