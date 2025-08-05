import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  constructor(private music: MusicService) { }

  togglePlay(event: Event) {
    event.stopPropagation();
    this.music.togglePlayPause();
  }

  openNowPlaying() {
  // Logic to open the now playing screen
  window.location.href = '/tabs/now-playing'; // Adjust the path as needed
}
get isPlaying() {
    return this.music.isPlaying;
  }
  get currentSong() {
    return this.music.currentSong;
  }
}
