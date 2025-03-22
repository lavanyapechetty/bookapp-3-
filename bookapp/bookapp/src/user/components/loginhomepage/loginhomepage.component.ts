import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loginhomepage',
  imports: [RouterLink],
  templateUrl: './loginhomepage.component.html',
  styleUrl: './loginhomepage.component.css'
})
export class LoginhomepageComponent {
  
  constructor() {}

  // Define the hideContent method
  hideContent() {
    // Add your logic here
    console.log('hideContent method called');
  }
}
