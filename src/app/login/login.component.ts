import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from "../services/authentication.service";
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  };
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  registered: boolean = false;

  login() {
    this.authService.login(this.credentials).then(() => this.router.navigate(['/courses']))
      .catch((err) => {alert(err.message); });
  }
  register() {
    this.authService.register(this.credentials)
      .then(() => {this.registered = true; } )
      . catch ((err) => {alert(err.message); }).then(() => this.router.navigate(['/courses']));
  }

}
