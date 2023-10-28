import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public signUpForm: FormGroup;
  public submitClicked = false;
  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder
  ) {
    this.createSignupForm();
  }
  public createSignupForm() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  public checkValidation(input: string) {
    const validation = this.signUpForm.get(input)!.invalid && (this.signUpForm.get(input)!.dirty || this.signUpForm.get(input)!.touched)
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
    //     return this.signUpForm.get(input)!.hasError('required') ? 'This field is required' :
    //           this.signUpForm.get(input)!.hasError('pattern') ? 'Not a valid value' :'';
    //   }
    //   case 'password': {
    //     break;
    //   }
    // }
    return this.signUpForm.get(input)!.hasError('required') ? 'This field is required' :
      this.signUpForm.get(input)!.hasError('pattern') ? 'Not a valid value' : '';
  }
  // emailErrors() {
  //   return this.signUpForm.get('email')!.hasError('required') ? 'This field is required' :
  //     this.signUpForm.get('email')!.hasError('pattern') ? 'Not a valid email address' :''
  // }
  public resetForm() {
    this.signUpForm.reset();
    this.submitClicked = false;
  }
  public gotoLogin() {
    this.router.navigateByUrl('auth/login');
  }
  public onSignUpSubmit() {
    console.log(this.signUpForm?.value);
    this.submitClicked = true;
  }
}
