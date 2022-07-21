import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatestMoviePageRoutingModule } from './latest-movie-routing.module';

import { LatestMoviePage } from './latest-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatestMoviePageRoutingModule
  ],
  declarations: [LatestMoviePage]
})
export class LatestMoviePageModule {}
