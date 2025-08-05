import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  constructor(
    private musicService: MusicService,
    private router: Router
  ) {}

  togglePlay(event: Event) {
    event.stopPropagation();
    this.musicService.togglePlayPause();  // Use musicService instead of this.music
  }

  openNowPlaying() {
    // Use Angular Router instead of window.location
    this.router.navigate(['/tabs/now-playing']);
  }

  isPlaying(): boolean {
    return this.musicService.isPlaying();
  }

  get currentSong() {
    return this.musicService.currentSong;  // Get currentSong from musicService
  }
}
