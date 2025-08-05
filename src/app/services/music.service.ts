import { Injectable } from '@angular/core';
import { parseBlob } from 'music-metadata-browser';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  audio = new Audio();
  currentSong: {
    title: string;
    artist: string;
    cover: string;
    fileurl: string;
  } | null = null;

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

    this.currentSong = {
      title,
      artist,
      cover: coverImageUrl,
      fileurl
    };
    this.audio.src = fileurl;
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  togglePlayPause() {
    if (this.audio.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  isPlaying(): boolean {
    return !this.audio.paused;
  }

  constructor() { }
}
