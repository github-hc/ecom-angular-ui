import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginRequestModel } from '../models/login/login-request-model';
import { environment } from 'src/environments/environment';
import { LoginResponseModel } from '../models/login/login-response-model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

   login(loginRequestModel:LoginRequestModel){
   return this.httpClient.post<LoginResponseModel>(environment.base_url+'api/auth/signin',loginRequestModel,{
      headers: new HttpHeaders({"content-type":"application/json"})
    });
  }
}
