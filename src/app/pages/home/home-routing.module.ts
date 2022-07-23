import { NgModule } from '@angular/core';

import { HomePage } from './home.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'latest-movie',
        loadChildren: () => import('../latest-movie/latest-movie.module').then(m => m.LatestMoviePageModule)
      },
      {
        path: 'catalog',
        loadChildren: () => import('../catalog/catalog.module').then(m => m.CatalogPageModule)
      },
      {
        path: '',
        redirectTo: 'latest-movie',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
