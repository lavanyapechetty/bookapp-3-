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
export class UsersComponent implements OnInit {
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
 
  addUser(): void {
    this.clearMessage();
    console.log('Adding user:', this.newUser);
    this.usersService.addUser(this.newUser).subscribe((data: Users) => {
      console.log('Added user:', data);
      this.users.push(data);
      this.newUser = { userid: 0, firstname: '', lastname: '', phonenumber: '', password: '', rolenumber: 0, username: '', purchaseLogs: [] }; // Reset purchaseLogs
      this.message = 'User added successfully';
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
 
  updateUserFirstname(userId: number, firstname: string): void {
    this.clearMessage();
    this.usersService.updateUserFirstname(userId, firstname).subscribe((data: Users) => {
      const index = this.users.findIndex(user => user.userid === userId);
      if (index !== -1) {
        this.users[index].firstname = firstname;
      }
      this.updatedFirstname = '';
      this.selectedUserId = undefined;
      this.message = 'User firstname updated successfully';
    });
  }
 
  updateUserLastname(userId: number, lastname: string): void {
    this.clearMessage();
    this.usersService.updateUserLastname(userId, lastname).subscribe((data: Users) => {
      const index = this.users.findIndex(user => user.userid === userId);
      if (index !== -1) {
        this.users[index].lastname = lastname;
      }
      this.updatedLastname = '';
      this.selectedUserId = undefined;
      this.message = 'User lastname updated successfully';
    });
  }
 
  updateUserPhonenumber(userId: number, phonenumber: string): void {
    this.clearMessage();
    this.usersService.updateUserPhonenumber(userId, phonenumber).subscribe((data: Users) => {
      const index = this.users.findIndex(user => user.userid === userId);
      if (index !== -1) {
        this.users[index].phonenumber = phonenumber;
      }
      this.updatedPhonenumber = '';
      this.selectedUserId = undefined;
      this.message = 'User phonenumber updated successfully';
    });
  }
}