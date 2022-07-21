import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatestMoviePage } from './latest-movie.page';

const routes: Routes = [
  {
    path: '',
    component: LatestMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatestMoviePageRoutingModule {}
