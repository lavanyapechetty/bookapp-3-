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

export class StateComponent implements OnInit {
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


  addState(): void {
    this.newState.stateName = this.newState.stateName.toUpperCase();
    this.newState.stateCode = this.newState.stateCode.toUpperCase();
    console.log('Adding state:', this.newState);
    this.stateService.addState(this.newState).subscribe(
      (data) => {
        console.log('Added state:', data);
        this.states.push({ ...data, stateName: data.stateName.toUpperCase(), stateCode: data.stateCode.toUpperCase() });
        this.newState = { stateCode: '', stateName: '' };
      },
      (error) => {
        console.error('Error adding state:', error);
      }
    );
  }

  updateStateName(): void {
    if (this.selectedStateId) {
      const upperCaseStateName = this.updatedStateName.toUpperCase();
      this.stateService.updateStateName(this.selectedStateId, upperCaseStateName).subscribe(
        (data) => {
          const index = this.states.findIndex(state => state.stateCode === this.selectedStateId);
          if (index !== -1) {
            this.states[index].stateName = upperCaseStateName;
          }
          this.updatedStateName = '';
          this.selectedStateId = '';
        },
        (error) => {
          console.error('Error updating state name:', error);
        }
      );
    }
  }
}
