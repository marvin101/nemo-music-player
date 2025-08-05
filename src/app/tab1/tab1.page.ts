import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  constructor(private musicService: MusicService) {}

  onFileSelected(event: any): void {
    // Safely access the files from the event
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.musicService.loadSong(file);
    }
  }
}
