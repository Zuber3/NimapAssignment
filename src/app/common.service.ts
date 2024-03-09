import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  setFormData(myForm: any) {
    throw new Error('Method not implemented.');
  }
    readonly url="http://localhost:3000/";
  constructor(private http:HttpClient) { }

  AddUpadteUser(user:any):Observable<any>
{
  debugger
   return this.http.post(this.url+"user",user);
}
}
