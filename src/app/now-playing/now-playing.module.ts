import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NowPlayingPage } from './now-playing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NowPlayingPage  // Move it here instead of declarations
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NowPlayingPageModule {}
