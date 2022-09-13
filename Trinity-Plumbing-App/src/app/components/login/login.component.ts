import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public reactiveForm!: FormGroup;

  constructor() {

    this.reactiveForm = new FormGroup({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
    })

   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
