import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }
}
