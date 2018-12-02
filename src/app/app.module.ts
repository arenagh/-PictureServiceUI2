import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MenulibModule } from 'menulib';
import { ApiModule } from 'api';

import { PicViewModule } from './pic-view/pic-view.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ScrollingModule,
    AppRoutingModule,
    MenulibModule,
    ApiModule,
    PicViewModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
