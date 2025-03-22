import { Component, OnInit } from '@angular/core';
import { PublisherService } from '../../services/publisher.service';
import { Publisher } from '../../../model/publisher';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { State } from '../../../model/state';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./publisher.component.css']
})
export class PublisheruserComponent implements OnInit {
  publishers: Publisher[] = [];


  constructor(private publisherService: PublisherService) {}

  ngOnInit(): void {
    this.getAllPublishers();
  }

  getAllPublishers(): void {
    this.publisherService.getAllPublishers().subscribe(data => {
      this.publishers = data;
    });
  }
 

    }