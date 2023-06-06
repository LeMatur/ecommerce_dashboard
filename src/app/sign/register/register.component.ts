import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm!: FormGroup


  constructor(private router: Router, 
    private formBuilder: FormBuilder,) {
   }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confPassword: new FormControl(null, Validators.required),
    })
  }
}
