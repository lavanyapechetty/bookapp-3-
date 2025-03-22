import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../../model/users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./users.component.css']
})
export class UsersuserComponent implements OnInit {
  users: Users[] = [];
  newUser: Users = { userid: 0, firstname: '', lastname: '', phonenumber: '', password: '', rolenumber: 0, username: '', purchaseLogs: [] }; // Initialize purchaseLogs
  fetchedUser: Users | undefined;
  updatedFirstname: string = '';
  updatedLastname: string = '';
  updatedPhonenumber: string = '';
  selectedUserId: number | undefined;
  message: string | undefined;
 
  constructor(private usersService: UsersService) {}
 
  ngOnInit(): void {
    this.getAllUsers();
  }
 
  clearMessage(): void {
    this.message = undefined;
  }
 
  getAllUsers(): void {
    this.clearMessage();
    this.usersService.getAllUsers().subscribe((data: Users[]) => {
      console.log('Fetched users:', data);
      this.users = data;
    });
  }
 
  getUserById(userId: number): void {
    this.clearMessage();
    this.usersService.getUserById(userId).subscribe((data: Users) => {
      console.log('Fetched user:', data);
      this.fetchedUser = data;
      this.message = 'User fetched successfully';
    });
  }
}