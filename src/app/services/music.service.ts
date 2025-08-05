import { Injectable } from '@angular/core';
import { parseBlob } from 'music-metadata-browser';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private audio: HTMLAudioElement;
  private _currentSong: any = null;
  private playPromise: Promise<void> | null = null;

  constructor() {
    // Initialize the audio element
    this.audio = new Audio();
  }

  get currentSong() {
    return this._currentSong;
  }

  async loadSong(file: File) {
    const metadata = await parseBlob(file);
    const common = metadata.common;

    const title = common.title || 'Unknown Title';
    const artist = common.artist || 'Unknown Artist';
    const picture = common.picture?.[0];

    let coverImageUrl = 'assets/default-cover.jpg';

    if (picture) {
      const blob = new Blob([picture.data], { type: picture.format });
      coverImageUrl = URL.createObjectURL(blob);
    }

    const fileurl = URL.createObjectURL(file);

    this._currentSong = {
      title,
      artist,
      cover: coverImageUrl,
      fileurl
    };
    this.audio.src = fileurl;
  }

  async play() {
    try {
      // Store the play promise
      this.playPromise = this.audio.play();
      await this.playPromise;
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  }

  async pause() {
    try {
      // Wait for any pending play promise to resolve before pausing
      if (this.playPromise) {
        await this.playPromise;
      }
      this.audio.pause();
    } catch (error) {
      console.error('Error pausing audio:', error);
    }
  }

  async togglePlayPause() {
    if (this.audio.paused) {
      await this.play();
    } else {
      await this.pause();
    }
  }

  isPlaying(): boolean {
    // Add null check
    return this.audio ? !this.audio.paused : false;
  }
}
