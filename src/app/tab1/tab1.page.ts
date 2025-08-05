import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() {}

  onFileSelected(event: any): void {
    // Handle file selection logic here
    const file = event.target.files[0];
    if (file) {
      // You can process the selected file as needed
      console.log('Selected file:', file);
    }
  }

}
