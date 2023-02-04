import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [MainComponent],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {}
