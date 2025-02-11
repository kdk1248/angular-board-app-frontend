import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/models/auth/user-role-enum';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone:false,

})
export class SignupComponent  implements OnInit {
  email: string = '';
  username: string = '';
  password: string = '';
  passwordConfirm: string = '';
  role: UserRole = UserRole.USER;

  constructor(
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit() {}

  async onSignUp(){
    const signUpData = {
      email: this.email,
      username: this.username,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
      role: UserRole.USER,
    }
    console.log('signUpData:',signUpData);

    this.authService.signUp(signUpData).subscribe({
      next: response => {
        if (response.success) {
          console.log('Sign Up successful:', response.data);
          this.router.navigate(['auth']);
        } else {
          console.error('Sign Up failed:', response.message);
        }
      },
      error: err => {
        console.error('Sign Up error:', err);
      },
      complete: () => {
        console.log('Sign Up request completed.');
      }
    });
  }
}
