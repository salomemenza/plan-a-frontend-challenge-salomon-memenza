import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CatalogPageRoutingModule } from './catalog-routing.module';

import { CatalogPage } from './catalog.page';
import { FormsModule } from '@angular/forms';
import { MovieItemComponent } from 'src/app/components/movie-item/movie-item.component';
import { MovieAcordionComponent } from 'src/app/components/movie-acordion/movie-acordion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogPageRoutingModule
  ],
  declarations: [CatalogPage, MovieItemComponent, MovieAcordionComponent]
})
export class CatalogPageModule {}
