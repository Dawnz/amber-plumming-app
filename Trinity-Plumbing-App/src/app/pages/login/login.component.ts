import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  reactiveForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get email() {
    return this.reactiveForm.get('email')?.value;
  }
  get password() {
    return this.reactiveForm.get('password')?.value;
  }

  ngOnInit(): void {}
  login() {
    this.auth
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe(() => {
        console.log('login successful');
        this.router.navigateByUrl('/');
      });
  }

  onSubmit() {}
}
