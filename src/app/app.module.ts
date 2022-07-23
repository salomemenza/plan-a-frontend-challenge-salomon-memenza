import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './pages/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { HomePageModule } from './pages/home/home.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCER } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffect } from './state/effects/movie.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HomePageModule,
    LoginPageModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({name: "TEST"}),
    EffectsModule.forRoot([MovieEffect])
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
