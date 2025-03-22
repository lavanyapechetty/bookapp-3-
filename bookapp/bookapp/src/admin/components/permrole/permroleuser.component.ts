import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Permrole } from '../../../model/permrole';
import { PermroleService } from '../../services/permrole.service';

@Component({
  selector: 'app-permrole',
  imports: [CommonModule, FormsModule],
  templateUrl: './permrole.component.html',
  styleUrls: ['./permrole.component.css']
})
export class PermroleuserComponent implements OnInit {
  selectedPermrole: any = null;
  permroles: any[] = [];
  rolenumber: number = 0; // Provide an initial value
  permrole: string = ''; // Add this line to bind the permrole input

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPermroles(); // Fetch all permroles
  }

  // Method to fetch permrole from the backend
  fetchPermrole(rolenumber: number) {
    this.http.get(`/api/permrole/update/permrole/${rolenumber}`).subscribe(
      (data: any) => {
        this.selectedPermrole = data;
      },
      (error) => {
        console.error('Error fetching permrole:', error);
      }
    );
  }

  // Method to fetch all permroles from the backend
  fetchPermroles() {
    this.http.get<any[]>(`/api/permrole`).subscribe(
      (data: any[]) => {
        this.permroles = data;
      },
      (error) => {
        console.error('Error fetching permroles:', error);
      }
    );
  }

  // Method to add a new permrole
  addPermrole() {
    const newPermrole = { rolenumber: this.rolenumber, permrole: this.permrole };
    this.http.post(`/api/permrole`, newPermrole).subscribe(
      (data: any) => {
        console.log('Permrole added successfully', data);
        this.fetchPermroles(); // Refresh the list of permroles
      },
      (error) => {
        console.error('Error adding permrole:', error);
      }
    );
  }

  // Method to update permrole
  updatePermrole(rolenumber: number) {
    const updatedPermrole = { permrole: this.selectedPermrole.permrole }; // Use the current permrole value
    this.http.put(`/api/permrole/${rolenumber}`, updatedPermrole).subscribe(
      (data: any) => {
        this.selectedPermrole = data;
      },
      (error) => {
        console.error('Error updating permrole:', error);
      }
    );
  }
}