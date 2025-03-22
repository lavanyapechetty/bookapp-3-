import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Inventory } from '../../../model/inventory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-inventory',
  imports:[CommonModule,FormsModule],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventories: Inventory[] = [];
  newInventory: Inventory = { inventoryId: 0, isbn: '', ranks: 0, purchased: false };
  updatedInventory: Inventory = { inventoryId: 0, isbn: '', ranks: 0, purchased: false };
  updateInventoryId: number = 0;
  getInventoryId: number = 0;
 
  constructor(private inventoryService: InventoryService) {}
 
  ngOnInit(): void {
    this.getInventories();
  }
 
  getInventories(): void {
    this.inventoryService.getAllInventories().subscribe((data: Inventory[]) => {
      this.inventories = data;
    });
  }
 
  addInventory(inventory: Inventory): void {
    this.inventoryService.addInventory(inventory).subscribe(response => {
      console.log(response);
      this.getInventories(); // Refresh the list after adding
    });
  }
 
  updateInventory(inventoryId: number, inventory: Inventory): void {
    this.inventoryService.updateInventory(inventoryId, inventory).subscribe(response => {
      console.log(response);
      this.getInventories(); // Refresh the list after updating
    });
  }
 
  getInventoryById(inventoryId: number): void {
    this.inventoryService.getInventoryById(inventoryId).subscribe((data: Inventory) => {
      console.log(data);
    });
  }
}