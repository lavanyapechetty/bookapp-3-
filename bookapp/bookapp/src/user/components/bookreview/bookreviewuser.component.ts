 
import { Component, OnInit } from '@angular/core';
import { BookReview } from '../../../model/bookreview';
import { CommonModule } from '@angular/common';
import { BookReviewService } from '../../services/bookreview.service';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-bookreview',
  imports: [CommonModule, FormsModule],
  templateUrl: './bookreview.component.html',
  styleUrls: ['./bookreview.component.css'] // Corrected property name
})
export class BookreviewuserComponent implements OnInit {
  bookReviews: BookReview[] = [];
  reviewsByIsbn: BookReview[] = [];
  newBookReview: BookReview = { isbn: '', reviewerid: 0, rating: 0, comments: '' };
  isbnSearch: string = '';
  isbnUpdate: string = '';
  ratingUpdate: number = 0;
  isbnCommentsUpdate: string = '';
  commentsUpdate: string = ''; // Added property
  successMessage: string = '';
  errorMessage: string = '';
 
  constructor(private bookReviewService: BookReviewService) {}
 
  ngOnInit(): void {
    this.bookReviewService.getAllBookReviews().subscribe((data: BookReview[]) => {
      this.bookReviews = data;
    });
  }
 
 
  getReviewsByIsbn(): void {
    const trimmedIsbn = this.isbnSearch.trim(); // Trim any leading or trailing spaces
    this.bookReviewService.getAllReviewsByIsbn(trimmedIsbn).subscribe(
      (data: BookReview[]) => {
        this.reviewsByIsbn = data;
      },
      (error) => {
        console.error('Error fetching reviews by ISBN:', error);
        this.errorMessage = `Error fetching reviews by ISBN: ${error.message}`;
        this.successMessage = '';
      }
    );
  }
 
  
}
 
 
 
 
 
 