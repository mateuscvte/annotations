import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth) { }

  login (email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
      this.router.navigate(['/dashboard']);
    }).catch();
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
