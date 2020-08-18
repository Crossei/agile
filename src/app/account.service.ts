import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Staff } from './staff';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http: HttpClient) { }
  staff = new Staff();

  public loginUserFromRemote(staff: Staff): Observable<any> {
    return this._http.post<any>("http://localhost:8080/dangnhap", staff)
  }

  public registerUserFromRemote(staff: Staff): Observable<any> {
    return this._http.post<any>("http://localhost:8080/dangky", staff)
  }
  public getUserFromRemote(staff_id): Observable<any> {
    return this._http.get<any>('http://localhost:8080/thongtin/'+`${staff_id}`)
  }
  public quanlyUserFromRemote(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/quanly")
  }
  public updateUserFromRemote(staff: Staff): Observable<any> {
    return this._http.put<any>("http://localhost:8080/thongtin", staff)
  }
  public removeUserFromRemote(staff_id): Observable<any> {
    return this._http.delete<any>('http://localhost:8080/quanly/'+`${staff_id}`)
  }
  authenticate(staff) {

    sessionStorage.setItem('username', this.staff.username)
    sessionStorage.setItem('role', this.staff.role.toString())
    return true;


  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }


}