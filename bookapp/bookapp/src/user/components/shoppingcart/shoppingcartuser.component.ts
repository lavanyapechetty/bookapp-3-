import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shoppingcart.service';
import { ShoppingCart } from '../../../model/shoppingcart';
import { Users } from '../../../model/users';
import { Book } from '../../../model/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-shoppingcart',
  standalone: true,
  templateUrl: './shoppingcart.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartuserComponent implements OnInit {
  shoppingCarts: ShoppingCart[] = [];
  isLoading = false;
 
  users: Users = {
    userid: 0,
    firstname: '',
    lastname: '',
    phonenumber: '',
    password: '',
    rolenumber: 0,
    username: '',
    purchaseLogs: [] // Add this property
  };
 
  book: Book = new Book('', '', '', 0, '', 0); // Corrected to match the expected types
 
  newShoppingCart: ShoppingCart = new ShoppingCart(
    {
      userid: 0,
      firstname: '',
      lastname: '',
      phonenumber: '',
      password: '',
      rolenumber: 0,
      username: '',
      purchaseLogs: [] // Add this property
    },
    new Book('', '', '', 0, '', 0) // Corrected to match the expected types
  );
 
  addMessage: string = '';
  getMessage: string = '';
  updateMessage: string = '';
  showAddShoppingCartForm: boolean = false;
  editShoppingCartIndex: number | null = null;
 
  constructor(private shoppingCartService: ShoppingCartService) {}
 
  ngOnInit(): void {
    // You could load initial data here if needed
  }
 
  toggleAddShoppingCartForm(): void {
    this.showAddShoppingCartForm = !this.showAddShoppingCartForm;
    if (this.showAddShoppingCartForm) {
      this.addMessage = '';
    }
  }
 
  getShoppingCartsByUserId(userid: number): void {
    if (!userid) {
      this.getMessage = 'Please enter a valid user ID';
      return;
    }
   
    this.isLoading = true;
    this.getMessage = 'Loading...';
   
    this.shoppingCartService.getShoppingCartsByUserId(userid).subscribe({
      next: (data: ShoppingCart[]) => {
        this.shoppingCarts = data;
        this.getMessage = data.length > 0
          ? 'Shopping carts fetched successfully'
          : 'No shopping carts found for this user';
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching shopping carts', error);
        this.getMessage = 'Error fetching shopping carts: ' + (error.message || 'Unknown error');
        this.isLoading = false;
      }
    });
  }
 
 
  }