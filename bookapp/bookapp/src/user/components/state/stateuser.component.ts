import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { State } from '../../../model/state';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  imports:[FormsModule,CommonModule],
  styleUrls: ['./state.component.css']
})

export class StateuserComponent implements OnInit {
  states: State[] = [];
  newState: State = { stateCode: '', stateName: '' };
  updatedStateName: string = '';
  selectedStateId: string = '';
  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    // this.getAllStates();
  }

  getAllStates(): void {
    this.stateService.getAllStates().subscribe(
      (data) => {
        console.log('Fetched states:', data);
        this.states = data.map(state => {
          return { ...state, stateName: state.stateName.toUpperCase(), stateCode: state.stateCode.toUpperCase() };
        });
      },
      (error) => {
        console.error('Error fetching states:', error);
      }
    );
  }


}