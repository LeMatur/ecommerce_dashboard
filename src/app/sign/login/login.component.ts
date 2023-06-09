import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup
  // login: Login;
  isNotLogin: boolean = false;
  isProgressing: boolean = false;

  visible:boolean = true;
  changetype:boolean =true;
  
  constructor(private router: Router,
    private formBuilder: FormBuilder,) {
   }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.signInForm = this.formBuilder.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }



  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

}
