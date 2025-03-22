 
import { Component, OnInit } from '@angular/core';
import { PurchaseLogService } from '../../services/purchaselog.service';
import { PurchaseLog } from '../../../model/purchaselog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-purchaselog',
  templateUrl: './purchaselog.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./purchaselog.component.css']
})
export class PurchaseLoguserComponent implements OnInit {
  purchaseLogs: PurchaseLog[] = [];
  newPurchaseLog: PurchaseLog = {
    users: { userid: 0 },
    inventory: { inventoryid: 0 }
  };
  getUserId: number = 0;
  getMessage: string = '';

  constructor(private purchaseLogService: PurchaseLogService) {}
 
  ngOnInit(): void {}
 
  getPurchaseLogByUserId(userId: number): void {
    this.purchaseLogService.getPurchaseLogByUserId(userId).subscribe(
      purchaseLogs => {
        console.log('Get response:', purchaseLogs);
        this.purchaseLogs = purchaseLogs;
        this.getMessage = 'Purchase logs fetched successfully';
      },
      error => {
        console.error('Error fetching purchase logs:', error);
        this.getMessage = error.message || 'Error fetching purchase logs';
      }
    );
  }
}
 
 