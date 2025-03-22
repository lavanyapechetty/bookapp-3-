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
export class ShoppingCartComponent implements OnInit {
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
 
  addShoppingCart(): void {
    if (!this.newShoppingCart.users.userid || !this.newShoppingCart.book.isbn) {
      this.addMessage = 'Please fill in all required fields';
      return;
    }
   
    this.isLoading = true;
    this.addMessage = 'Adding...';
   
    this.shoppingCartService.addShoppingCart(this.newShoppingCart).subscribe({
      next: (response) => {
        this.addMessage = 'Shopping cart added successfully';
        // Reset form
        this.newShoppingCart = new ShoppingCart(
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
        // Refresh shopping carts list if we're viewing the same user
        if (this.users.userid === this.newShoppingCart.users.userid) {
          this.getShoppingCartsByUserId(this.users.userid);
        }
        this.isLoading = false;
        this.showAddShoppingCartForm = false;
      },
      error: (error) => {
        console.error('Error adding shopping cart', error);
        this.addMessage = 'Error adding shopping cart: ' + (error.message || 'Unknown error');
        this.isLoading = false;
      }
    });
  }
 
  updateIsbn(userid: number, book: Book): void {
    if (!userid || !book.isbn) {
      this.updateMessage = 'Please fill in all required fields';
      return;
    }
   
    this.isLoading = true;
    this.updateMessage = 'Updating...';
   
    this.shoppingCartService.updateIsbn(userid, book).subscribe({
      next: (response) => {
        console.log('Update successful:', response);
        this.updateMessage = 'Shopping cart updated successfully';
        this.getShoppingCartsByUserId(userid);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error updating shopping cart', error);
        this.updateMessage = 'Error updating shopping cart: ' + (error.message || 'Unknown error');
        this.isLoading = false;
      }
    });
  }
 
  editShoppingCart(index: number): void {
    this.editShoppingCartIndex = index;
  }
 
  saveShoppingCart(index: number): void {
    const shoppingCart = this.shoppingCarts[index];
   
    this.isLoading = true;
    this.updateMessage = 'Saving...';
   
    this.shoppingCartService.updateIsbn(shoppingCart.users.userid, shoppingCart.book).subscribe({
      next: (response) => {
        this.shoppingCarts[index] = response;
        this.editShoppingCartIndex = null;
        this.updateMessage = 'Shopping cart updated successfully';
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error updating shopping cart', error);
        this.updateMessage = 'Error updating shopping cart: ' + (error.message || 'Unknown error');
        this.isLoading = false;
      }
    });
  }
 
  cancelEdit(): void {
    this.editShoppingCartIndex = null;
  }
}