import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  public reactiveForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email : new FormControl('', Validators.required),
      userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      role: new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
      passwordConfirmed : new FormControl('', Validators.required),
    })
  }

  onSubmit() {

  }

}
