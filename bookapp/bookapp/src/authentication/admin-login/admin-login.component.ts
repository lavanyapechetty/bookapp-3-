import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { AuthenticationService } from '../services/auth-services.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}
  
  user: User = {
    username: '',
    password: '',
    role: ''
  };
  
  isLoggedIn = false;
  token: any;

  AdminLogin() {
    this.user.role = "ROLE_ADMIN";
    this.authenticationService.UserLogin(this.user).subscribe((e) => {
      this.token = e.token;
      localStorage.setItem('token', this.token);
      localStorage.setItem('role', this.user.role);
      this.isLoggedIn = true; // Set to true after successful login
      this.router.navigate(["/adminhomepage"]);
    }, (error) => {
      if (error.status === 403) {
        alert('Invalid username or password.');
      } else {
        console.error('Error during login:', error);
        alert('Incorrect Password or Username');
      }
    });
  }
}