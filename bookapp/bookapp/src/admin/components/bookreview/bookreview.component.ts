 
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
export class BookreviewComponent implements OnInit {
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
 
  addBookReview(): void {
    const payload = {
      isbn: this.newBookReview.isbn.trim(),
      reviewerid: this.newBookReview.reviewerid,
      rating: this.newBookReview.rating,
      comments: this.newBookReview.comments.trim()
    };
 
    this.bookReviewService.addBookReview(payload).subscribe(
      (data) => {
        this.bookReviews.push(data);
        this.newBookReview = { isbn: '', reviewerid: 0, rating: 0, comments: '' };
        this.successMessage = 'Book review added successfully!';
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error adding book review:', error);
        this.errorMessage = `Error adding book review: ${error.message}`;
        this.successMessage = '';
      }
    );
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
 
  updateRating(): void {
    this.bookReviewService.updateRating(this.isbnUpdate, this.ratingUpdate).subscribe(
      (data) => {
        const index = this.bookReviews.findIndex(review => review.isbn === this.isbnUpdate);
        if (index !== -1) {
          this.bookReviews[index].rating = this.ratingUpdate;
        }
        this.isbnUpdate = '';
        this.ratingUpdate = 0;
        this.successMessage = 'Rating updated successfully!';
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error updating rating:', error);
        this.errorMessage = `Error updating rating: ${error.message}`;
        this.successMessage = '';
      }
    );
  }
 
  updateComments(): void {
    this.bookReviewService.updateComments(this.isbnCommentsUpdate, this.commentsUpdate).subscribe(
      (data) => {
        const index = this.bookReviews.findIndex(review => review.isbn === this.isbnCommentsUpdate);
        if (index !== -1) {
          this.bookReviews[index].comments = this.commentsUpdate;
        }
        this.isbnCommentsUpdate = '';
        this.commentsUpdate = '';
        this.successMessage = 'Comments updated successfully!';
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error updating comments:', error);
        this.errorMessage = `Error updating comments: ${error.message}`;
        this.successMessage = '';
      }
    );
  }
}
 
 
 
 
 
 