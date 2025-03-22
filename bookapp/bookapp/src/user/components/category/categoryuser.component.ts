import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../../model/category';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./category.component.css']
})
export class CategoryuserComponent implements OnInit {
  category: Category = { catid: 0, catdescription: '' };
  newCategory: Category = { catid: 0, catdescription: '' };
  categories: Category[] = [];
  addMessage: string = '';
  getMessage: string = '';
  updateMessage: string = '';
  showAddCategoryForm: boolean = false;
  editCategoryIndex: number | null = null;
  isSuccess: boolean = false;
  updateSuccess: boolean = false;
 
  constructor(private categoryService: CategoryService) {}
 
  ngOnInit(): void {
    // Load all categories on initialization
    this.loadCategories();
  }
 
  // This method needs to be implemented to load all categories
  // You'll need to add this method to your CategoryService
  loadCategories(): void {
    // Assuming you add a getAllCategories() method to your service
    // this.categoryService.getAllCategories().subscribe(
    //   (response: Category[]) => {
    //     this.categories = response;
    //   },
    //   (error: any) => console.error('Error loading categories:', error)
    // );
   
    // For now, we'll leave this empty until you add the service method
  }
 
  toggleAddCategoryForm(): void {
    this.showAddCategoryForm = !this.showAddCategoryForm;
    // Clear previous messages when toggling the form
    this.addMessage = '';
  }
 
 
  getCategoryById(catid: string): void {
    const id = parseInt(catid, 10);
    if (!isNaN(id)) {
      this.categoryService.getCategoryById(id).subscribe(
        (response: Category) => {
          this.category = response;
          this.getMessage = '';
        },
        (error: any) => {
          console.error(error);
          this.getMessage = 'Category not found.';
        }
      );
    } else {
      console.error('Invalid ID');
      this.getMessage = 'Invalid ID';
    }
  }
 
}