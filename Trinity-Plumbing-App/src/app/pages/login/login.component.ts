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
  errorMessage: string = '';

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

  hasErrorMessage() {
    if (this.errorMessage !== '') {
      return true;
    }
    return false;
  }
  clearErrorMessage() {
    this.errorMessage = '';
  }

  ngOnInit(): void {}
  login() {
    this.clearErrorMessage();
    this.auth
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (response) => {
          console.log(response.data);
          console.log('login successful');
          this.router.navigateByUrl('/');
        },
        error: (response) => {
          console.log('login failed');
          console.log(response);
          this.errorMessage = response;
        },
      });
  }

  onSubmit() {}
}
