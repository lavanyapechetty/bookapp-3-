import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BookCondition } from '../../../model/bookcondition';
import { BookconditionService } from '../../services/bookcondition.service';

@Component({
  selector: 'app-bookcondition',
  imports: [CommonModule, FormsModule],
  templateUrl: './bookcondition.component.html',
  styleUrls: ['./bookcondition.component.css']
})
export class BookConditionComponent implements OnInit {
  bookConditions: BookCondition[] = [];
  newBookCondition: BookCondition = { ranks: 0, description: '', full_Description: '', price: 0 };
 
  constructor(private bookConditionService: BookconditionService) { }
 
  ngOnInit(): void {
    this.getBookConditions();
  }
 
  getBookConditions(): void {
    this.bookConditionService.getBookConditionByRanks(this.newBookCondition.ranks).subscribe((data: BookCondition) => {
      this.bookConditions = [data];
    });
  }
 
  addBookCondition(): void {
    this.bookConditionService.addBookCondition(this.newBookCondition).subscribe((data: BookCondition) => {
      this.bookConditions.push(data);
      this.newBookCondition = { ranks: 0, description: '', full_Description: '', price: 0 };
    });
  }
 
  updateFullDescription(ranks: number, full_description: string): void {
    this.bookConditionService.updateFullDescription(ranks, full_description).subscribe((data: BookCondition) => {
      this.getBookConditions();
    });
  }
 
  updateDescription(ranks: number, description: string): void {
    this.bookConditionService.updateDescription(ranks, description).subscribe((data: BookCondition) => {
      this.getBookConditions();
    });
  }
 
  updatePrice(ranks: number, price: number): void {
    this.bookConditionService.updatePrice(ranks, price).subscribe((data: BookCondition) => {
      this.getBookConditions();
    });
  }
}