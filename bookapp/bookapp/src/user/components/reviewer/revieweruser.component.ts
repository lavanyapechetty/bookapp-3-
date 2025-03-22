import { Component, OnInit } from '@angular/core';
import { Reviewer } from '../../../model/reviewer'; 
import { CommonModule } from '@angular/common';
import { ReviewerService } from '../../services/reviewer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviewer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class RevieweruserComponent implements OnInit {
  reviewerid: number | null = null;
  reviewerName: string = '';
  reviewerEmployedBy: string = '';
  reviewer: Reviewer | null = null;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private reviewerService: ReviewerService) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  clearMessage(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }

  clearForm() {
    throw new Error('Method not implemented.');
  }

  getReviewerById(): void {
    this.clearMessage();
    if (this.reviewerid !== null) {
      this.reviewerService.getReviewerById(this.reviewerid).subscribe(
        reviewer => {
          this.reviewer = reviewer;
          this.reviewerName = reviewer.name;
          this.reviewerEmployedBy = reviewer.employedby;
          this.successMessage = 'Reviewer fetched successfully';
          this.errorMessage = '';
        },
        error => this.handleError(error)
      );
    } else {
      this.errorMessage = 'Reviewer ID cannot be null';
    }
  }
  
  private handleError(error: any): void {
    this.errorMessage = error.message || 'An error occurred';
    console.error('An error occurred', error);
  }}