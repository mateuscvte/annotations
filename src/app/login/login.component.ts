import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    })
  }

  ngOnInit() {

  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.loginService.login(email, password).then().catch();
  }

}
