import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatIconRegistry} from '@angular/material/icon';
import {MattoolbarComponent } from './mattoolbar/mattoolbar.component';

@NgModule({
  imports: [CommonModule, BrowserModule, MatToolbarModule, MatIconModule],
  declarations: [AppComponent, MattoolbarComponent],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {}
