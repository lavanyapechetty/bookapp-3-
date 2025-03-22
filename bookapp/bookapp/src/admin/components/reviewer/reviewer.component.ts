import { Component, ChangeDetectorRef } from '@angular/core';
import { ReviewerService } from '../../services/reviewer.service'; // Adjust the path as necessary
import { Reviewer } from '../../../model/reviewer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviewer',
  imports: [FormsModule, CommonModule],
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent {
  reviewerid!: number; 
  reviewerName: string = '';
  reviewerEmployedBy: string = '';
  successMessage: string = '';
  errorMessage: string = '';
  reviewer!: Reviewer; 
  clearForm: any;

  constructor(private reviewerService: ReviewerService, private cdr: ChangeDetectorRef) {}

  // updateReviewerName(): void {
  //   this.clearMessage();
  //   if (this.reviewerid !== null) {
  //     this.reviewerService.updateReviewerName(this.reviewerid, this.reviewerName).subscribe(
  //       response => {
  //         console.log('Reviewer name updated:', response);
  //         if (this.reviewer) {
  //           this.reviewer.name = this.reviewerName;
  //         }
  //         this.reviewerName = '';
  //         this.successMessage = 'Reviewer name updated successfully';
  //         this.errorMessage = '';
  //       },
  //       error => {
  //         this.handleError(error);
  //         this.successMessage = '';
  //       }
  //     );
  //   } else {
  //     this.errorMessage = 'Reviewer ID cannot be null';
  //   }
  // }
  updateReviewerNameByReviewerId(reviewerid: number): void {
    this.clearMessage();
    const updatedReviewer = {
      reviewerid: reviewerid,
      name: this.reviewerName,
      employedby: this.reviewerEmployedBy // Assuming you want to keep the employedby field as well
    };
    this.reviewerService.updateReviewerNameByReviewerId(updatedReviewer).subscribe(
      response => {
        console.log('Reviewer name updated:', response);
        if (this.reviewer) {
          this.reviewer.name = this.reviewerName;
        }
        this.reviewerName = '';
        this.successMessage = 'Reviewer name updated successfully';
        this.errorMessage = '';
        this.cdr.detectChanges(); // Manually trigger change detection
      },
      error => this.handleError(error)
    );
  }

  updateReviewerEmployedBy(reviewerid: number): void {
    this.clearMessage();
    const updatedReviewer = {
      reviewerid: reviewerid,
      name: this.reviewerName,
      employedby: this.reviewerEmployedBy
    };
    this.reviewerService.updateReviewerEmployedBy(updatedReviewer).subscribe(
      response => {
        console.log('Reviewer employed by updated:', response);
        if (this.reviewer) {
          this.reviewer.employedby = this.reviewerEmployedBy;
        }
        this.reviewerEmployedBy = '';
        this.successMessage = 'Reviewer employed by updated successfully';
        this.errorMessage = '';
        this.cdr.detectChanges(); // Manually trigger change detection
      },
      error => this.handleError(error)
    );
  }

  private handleError(error: any): void {
    this.errorMessage = error.message || 'An error occurred';
    console.error('An error occurred', error);
  }

  private clearMessage(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }

  addReviewer(): void {
    const newReviewer: Reviewer = {
      reviewerid: this.reviewerid!,
      name: this.reviewerName,
      employedby: this.reviewerEmployedBy
    };
    this.reviewerService.addReviewer(newReviewer).subscribe(
      response => {
        console.log('Reviewer added:', response);
        this.successMessage = 'Reviewer added successfully';
        this.errorMessage = '';
        this.clearForm();
      },
      error => this.handleError(error)
    );
  }

  getReviewerById(): void {
    if (this.reviewerid !== null) {
      this.reviewerService.getReviewerById(this.reviewerid).subscribe(
        response => {
          console.log('Reviewer fetched:', response);
          this.reviewer = response;
          this.successMessage = 'Reviewer fetched successfully';
          this.errorMessage = '';
        },
        error => this.handleError(error)
      );
    } else {
      this.errorMessage = 'Reviewer ID cannot be null';
    }
  }
}



// import { Component, ChangeDetectorRef } from '@angular/core';
// import { ReviewerService } from '../../services/reviewer.service'; // Adjust the path as necessary
// import { Reviewer } from '../../../model/reviewer';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-reviewer',
//   imports: [FormsModule, CommonModule],
//   templateUrl: './reviewer.component.html',
//   styleUrls: ['./reviewer.component.css']
// })
// export class ReviewerComponent {
//   reviewerid!: number; 
//   reviewerName: string = '';
//   reviewerEmployedBy: string = '';
//   successMessage: string = '';
//   errorMessage: string = '';
//   reviewer!: Reviewer; 
//   clearForm: any;

//   constructor(private reviewerService: ReviewerService, private cdr: ChangeDetectorRef) {}

//   updateReviewerName(reviewerid: number): void {
//     this.clearMessage();
//     this.reviewerService.updateReviewerName(reviewerid, this.reviewerName).subscribe(
//       response => {
//         console.log('Reviewer name updated:', response);
//         if (this.reviewer) {
//           this.reviewer.name = this.reviewerName;
//         }
//         this.reviewerName = '';
//         this.successMessage = 'Reviewer name updated successfully';
//         this.errorMessage = '';
//         this.cdr.detectChanges(); // Manually trigger change detection
//       },
//       error => this.handleError(error)
//     );
//   }

//   updateReviewerEmployedBy(reviewerid: number): void {
//     this.clearMessage();
//     const updatedReviewer = {
//       reviewerid: reviewerid,
//       name: this.reviewerName,
//       employedby: this.reviewerEmployedBy
//     };
//     this.reviewerService.updateReviewerEmployedBy(updatedReviewer).subscribe(
//       response => {
//         console.log('Reviewer employed by updated:', response);
//         if (this.reviewer) {
//           this.reviewer.employedby = this.reviewerEmployedBy;
//         }
//         this.reviewerEmployedBy = '';
//         this.successMessage = 'Reviewer employed by updated successfully';
//         this.errorMessage = '';
//         this.cdr.detectChanges(); // Manually trigger change detection
//       },
//       error => this.handleError(error)
//     );
//   }

//   private handleError(error: any): void {
//     this.errorMessage = error.message || 'An error occurred';
//     console.error('An error occurred', error);
//   }

//   private clearMessage(): void {
//     this.successMessage = '';
//     this.errorMessage = '';
//   }

//   addReviewer(): void {
//     const newReviewer: Reviewer = {
//       reviewerid: this.reviewerid!,
//       name: this.reviewerName,
//       employedby: this.reviewerEmployedBy
//     };
//     this.reviewerService.addReviewer(newReviewer).subscribe(
//       response => {
//         console.log('Reviewer added:', response);
//         this.successMessage = 'Reviewer added successfully';
//         this.errorMessage = '';
//         this.clearForm();
//       },
//       error => this.handleError(error)
//     );
//   }

//   getReviewerById(): void {
//     if (this.reviewerid !== null) {
//       this.reviewerService.getReviewerById(this.reviewerid).subscribe(
//         response => {
//           console.log('Reviewer fetched:', response);
//           this.reviewer = response;
//           this.successMessage = 'Reviewer fetched successfully';
//           this.errorMessage = '';
//         },
//         error => this.handleError(error)
//       );
//     } else {
//       this.errorMessage = 'Reviewer ID cannot be null';
//     }
//   }
// }

// import { Component, ChangeDetectorRef } from '@angular/core';
// import { ReviewerService } from '../../services/reviewer.service'; // Adjust the path as necessary
// import { Reviewer } from '../../../model/reviewer';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-reviewer',
//   imports: [FormsModule, CommonModule],
//   templateUrl: './reviewer.component.html',
//   styleUrls: ['./reviewer.component.css']
// })
// export class ReviewerComponent {
//   reviewerid!: number; 
//   reviewerName: string = '';
//   reviewerEmployedBy: string = '';
//   successMessage: string = '';
//   errorMessage: string = '';
//   reviewer!: Reviewer; 
//   clearForm: any;

//   constructor(private reviewerService: ReviewerService, private cdr: ChangeDetectorRef) {}

  // updateReviewerName(reviewerid: number): void {
  //   this.clearMessage();
  //   const updatedReviewer = {
  //     reviewerid: reviewerid,
  //     name: this.reviewerName,
  //     employedby: this.reviewerEmployedBy
  //   };
  //   this.reviewerService.updateReviewerName(updatedReviewer).subscribe(
  //     response => {
  //       console.log('Reviewer name updated:', response);
  //       if (this.reviewer) {
  //         this.reviewer.name = this.reviewerName;
  //       }
  //       this.reviewerName = '';
  //       this.successMessage = 'Reviewer name updated successfully';
  //       this.errorMessage = '';
  //       this.cdr.detectChanges(); // Manually trigger change detection
  //     },
  //     error => this.handleError(error)
  //   );
  // }


  // updateReviewerName(): void {
  //   this.clearMessage();
  //   if (this.reviewerid !== null) {
  //     this.reviewerService.updateReviewerName(this.reviewerid, this.reviewerName).subscribe(
  //       response => {
  //         console.log('Reviewer name updated:', response);
  //         if (this.reviewer) {
  //           this.reviewer.name = this.reviewerName;
  //         }
  //         this.reviewerName = '';
  //         this.successMessage = 'Reviewer name updated successfully';
  //         this.errorMessage = '';
  //       },
  //       error => {
  //         this.handleError(error);
  //         this.successMessage = '';
  //       }
  //     );
  //   } else {
  //     this.errorMessage = 'Reviewer ID cannot be null';
  //   }
  // }


  // updateReviewerName(): void {
  //   this.clearMessage();
  //   if (this.reviewerid !== null) {
  //     this.reviewerService.updateReviewerName(this.reviewerid, this.reviewerName).subscribe(
  //       response => {
  //         console.log('Reviewer name updated:', response);
  //         if (this.reviewer) {
  //           this.reviewer.name = this.reviewerName;
  //         }
  //         this.reviewerName = '';
  //         this.successMessage = 'Reviewer name updated successfully';
  //         this.errorMessage = '';
  //       },
  //       error => {
  //         this.handleError(error);
  //         this.successMessage = '';
  //       }
  //     );
  //   } else {
  //     this.errorMessage = 'Reviewer ID cannot be null';
  //   }
  // }

  // updateReviewerEmployedBy(reviewerid: number): void {
  //       this.clearMessage();
  //       const updatedReviewer = {
  //         reviewerid: reviewerid,
  //         name: this.reviewerName,
  //         employedby: this.reviewerEmployedBy
  //       };
  //       this.reviewerService.updateReviewerEmployedBy(updatedReviewer).subscribe(
  //         response => {
  //           console.log('Reviewer employed by updated:', response);
  //           if (this.reviewer) {
  //             this.reviewer.employedby = this.reviewerEmployedBy;
  //           }
  //           this.reviewerEmployedBy = '';
  //           this.successMessage = 'Reviewer employed by updated successfully';
  //           this.errorMessage = '';
  //           this.cdr.detectChanges(); // Manually trigger change detection
  //         },
  //         error => this.handleError(error)
  //       );
  //     }

  // updateReviewerEmployedBy(reviewerid: number): void {
  //   this.clearMessage();
  //   const updatedReviewer = {
  //     reviewerid: reviewerid,
  //     name: this.reviewerName,
  //     employedby: this.reviewerEmployedBy
  //   };
  //   this.reviewerService.updateReviewerEmployedBy(updatedReviewer).subscribe(
  //     response => {
  //       console.log('Reviewer employed by updated:', response);
  //       if (this.reviewer) {
  //         this.reviewer.employedby = this.reviewerEmployedBy;
  //       }
  //       this.reviewerEmployedBy = '';
  //       this.successMessage = 'Reviewer employed by updated successfully';
  //       this.errorMessage = '';
  //       this.cdr.detectChanges(); // Manually trigger change detection
  //     },
  //     error => this.handleError(error)
  //   );
  // }

//   private handleError(error: any): void {
//     this.errorMessage = error.message || 'An error occurred';
//     console.error('An error occurred', error);
//   }

//   private clearMessage(): void {
//     this.successMessage = '';
//     this.errorMessage = '';
//   }

//   addReviewer(): void {
//     const newReviewer: Reviewer = {
//       reviewerid: this.reviewerid!,
//       name: this.reviewerName,
//       employedby: this.reviewerEmployedBy
//     };
//     this.reviewerService.addReviewer(newReviewer).subscribe(
//       response => {
//         console.log('Reviewer added:', response);
//         this.successMessage = 'Reviewer added successfully';
//         this.errorMessage = '';
//         this.clearForm();
//       },
//       error => this.handleError(error)
//     );
//   }

//   getReviewerById(): void {
//     if (this.reviewerid !== null) {
//       this.reviewerService.getReviewerById(this.reviewerid).subscribe(
//         response => {
//           console.log('Reviewer fetched:', response);
//           this.reviewer = response;
//           this.successMessage = 'Reviewer fetched successfully';
//           this.errorMessage = '';
//         },
//         error => this.handleError(error)
//       );
//     } else {
//       this.errorMessage = 'Reviewer ID cannot be null';
//     }
//   }
// }