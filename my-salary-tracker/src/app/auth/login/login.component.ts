import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;
  public submitClicked = false;

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder
  ) {
    this.createloginForm();
  }
  public createloginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  public checkValidation(input: string) {
    const validation = this.loginForm.get(input)!.invalid && (this.loginForm.get(input)!.dirty || this.loginForm.get(input)!.touched)
    return validation;
  }
  public displayFieldError(input: string) {
    // switch(input) {
    //   case 'firstName': {
    //     break;
    //   }
    //   case 'lastName': {
    //     break;
    //   }
    //   case 'email': {
    //     return this.loginForm.get(input)!.hasError('required') ? 'This field is required' :
    //           this.loginForm.get(input)!.hasError('pattern') ? 'Not a valid value' :'';
    //   }
    //   case 'password': {
    //     break;
    //   }
    // }
    return this.loginForm.get(input)!.hasError('required') ? 'This field is required' :
      this.loginForm.get(input)!.hasError('pattern') ? 'Not a valid value' : '';
  }
  // emailErrors() {
  //   return this.loginForm.get('email')!.hasError('required') ? 'This field is required' :
  //     this.loginForm.get('email')!.hasError('pattern') ? 'Not a valid email address' :''
  // }
  public resetForm() {
    this.loginForm.reset();
    this.submitClicked = false;
  }
  public gotoLogin() {
    this.router.navigateByUrl('auth/login');
  }
  public onLoginSubmit() {
    console.log(this.loginForm?.value);
    this.submitClicked = true;
  }
  public gotoSignUp() {
    this.router.navigateByUrl('auth/signup');
  }
  public gotoHome() {
    this.router.navigateByUrl('home');
  }
}
