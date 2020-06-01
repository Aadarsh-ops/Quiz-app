import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { Router } from '@angular/router';

export interface UserResponse {
}

@Injectable({
  providedIn: 'root'
})
export class LinkService {
 __url='http://localhost:5000';
 _url= '/api/users';
 
  constructor(private _http:HttpClient,private routes: Router) { }  

  
//   registers(userData){
//     return this._http.post<any>(this.__url, userData);
//    }
//    getData(): Observable<Users[]>{
//     return this._http.get<UserResponse>(this.__url)
//       .pipe(
//         map(({users} : UserResponse) => users)
//       )
//   }
//   deleteRow(msg): Observable<UserResponse>{
//     return this._http.delete<UserResponse>(`${this.__url}/${msg}`);
// }
//   sendEditData(data){
//     return this._http.put<any>(this.__url, data);  
//   }
  getToken(){
    return localStorage.getItem('token');
  } 
  loggedIn(){
    if(!!localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
    // return !!localStorage.getItem('token'); 
  }
  logout(){
    this.routes.navigate(['/main']);
    return localStorage.removeItem('token');
    
  }
  register(userData){
    return this._http.post<any>(`${this._url}/signup`, userData);
  }

  login(loginData) {
    return this._http.post<any>(`${this._url}/signin`, loginData);
  }
  goggle(){
    return this._http.get<any>(`${this._url}/google`);
  }
}