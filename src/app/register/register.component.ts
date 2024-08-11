import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule,AbstractControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  NgIf

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm!: FormGroup;

  constructor() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required]), // Name is required
      email: new FormControl('', [Validators.required, Validators.email]), // Email is required and must be valid
      password: new FormControl('', [Validators.required, Validators.minLength(6)]), // Password is required and must be at least 6 characters
      confirmPassword: new FormControl('', [Validators.required,this.confirmPasswordValidator]) // Confirm password is required
    });

  }
  get name() {
    return this.registrationForm.get('name');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get username() {
    return this.registrationForm.get('username');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

confirmPasswordValidator(
    control: AbstractControl,
  ): ValidationErrors | null {
    if (!control || !control.parent) {
      return null;
    }

    const password = control.parent.get('password');
    const confirmPassword = control;

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordsDontMatch: true };
    }
    return null;
  }


  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Registration data', this.registrationForm.value);
      // Handle registration logic here
    }
  }
}