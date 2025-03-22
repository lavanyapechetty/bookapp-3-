import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adminhomepage',
  imports: [RouterLink],
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent {

  constructor() {}

  // Define the hideContent method
  hideContent() {
    // Add your logic here
    console.log('hideContent method called');
  }
}