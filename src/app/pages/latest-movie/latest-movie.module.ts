import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LatestMoviePage } from './latest-movie.page';
import { LatestMoviePageRoutingModule } from './latest-movie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatestMoviePageRoutingModule
  ],
  declarations: [LatestMoviePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LatestMoviePageModule {}