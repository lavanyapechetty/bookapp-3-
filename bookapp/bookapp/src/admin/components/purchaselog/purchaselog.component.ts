 
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
export class PurchaseLogComponent implements OnInit {
  purchaseLogs: PurchaseLog[] = [];
  newPurchaseLog: PurchaseLog = {
    users: { userid: 0 },
    inventory: { inventoryid: 0 }
  };
  getUserId: number = 0;
  updateUserId: number = 0;
  updateInventory: { inventoryid: number } = { inventoryid: 0 };
 
  addMessage: string = '';
  getMessage: string = '';
  updateMessage: string = '';
 
  constructor(private purchaseLogService: PurchaseLogService) {}
 
  ngOnInit(): void {}
 
  addPurchaseLog(): void {
    this.purchaseLogService.addPurchaseLog(this.newPurchaseLog).subscribe(
      response => {
        console.log('Add response:', response);
        this.addMessage = response;
        this.getPurchaseLogByUserId(this.newPurchaseLog.users.userid);
        this.newPurchaseLog = { users: { userid: 0 }, inventory: { inventoryid: 0 } }; // Reset newPurchaseLog
      },
      error => {
        console.error('Error adding purchase log:', error);
        this.addMessage = error.message || 'Error adding purchase log';
      }
    );
  }
 
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
 
  updateInventoryId(userId: number): void {
    this.purchaseLogService.updateInventoryId(userId, this.updateInventory).subscribe(
      updatedLog => {
        console.log('Update response:', updatedLog);
        this.updateMessage = 'Purchase log updated successfully';
        this.getPurchaseLogByUserId(userId);
      },
      error => {
        console.error('Error updating purchase log:', error);
        this.updateMessage = error.message || 'Error updating purchase log';
      }
    );
  }
}
 
 