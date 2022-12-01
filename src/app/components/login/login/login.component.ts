import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequestModel } from 'src/app/models/login/login-request-model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: [],
      password: []
    });
  }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if(token && token.length > 0){
      this.router.navigate(['home']);
    }
  }

  onLogin() {
    console.log(this.loginForm);

    if (this.loginForm.valid) {
      let req: LoginRequestModel = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }

      this.loginService.login(req).subscribe(
        res => {
          console.log(res);
          if (res && res.token.length > 0) {
            localStorage.setItem('token', res.token);
            this.router.navigate(['home']);
          }
          else {
            alert('no token')
          }
        }
      );
    }
    else {
      alert('form invalid')
    }
  }
}
