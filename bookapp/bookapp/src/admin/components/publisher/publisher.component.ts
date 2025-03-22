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
export class PublisherComponent implements OnInit {
  publishers: Publisher[] = [];
  newPublisher: Publisher = { publisherid: 0, name: '', city: '', state: { stateCode: '', stateName: '' } };
  updateNameId: number = 0;
  updateName: string = '';
  updateCityId: number = 0;
  updateCity: string = '';
  updateStateId: number = 0;
  updateState: State = { stateCode: '', stateName: '' };

  constructor(private publisherService: PublisherService) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  getAllPublishers(): void {
    this.publisherService.getAllPublishers().subscribe(data => {
      this.publishers = data;
    });
  }

  addPublisher(): void {
    console.log('Adding Publisher:', this.newPublisher); // Log the new publisher
    this.publisherService.addPublisher(this.newPublisher).subscribe(response => {
      this.getAllPublishers();
      this.newPublisher = { publisherid: 0, name: '', city: '', state: { stateCode: '', stateName: '' } };
    }, error => {
      console.error('Error adding publisher:', error);
    });
  }

  updatePublisherName(): void {
    if (this.updateNameId) {
      this.publisherService.updatePublisherName(this.updateNameId, { name: this.updateName }).subscribe(response => {
        this.getAllPublishers();
      });
    }
  }

  updatePublisherCity(): void {
    if (this.updateCityId) {
      this.publisherService.updatePublisherCity(this.updateCityId, { city: this.updateCity }).subscribe(response => {
        this.getAllPublishers();
      });
    }
  }

  updatePublisherState(): void {
    if (this.updateStateId) {
      this.publisherService.updatePublisherState(this.updateStateId, { state: this.updateState }).subscribe(response => {
        this.getAllPublishers();
      });
    }
  }
}