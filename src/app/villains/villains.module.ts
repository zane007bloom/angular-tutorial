import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VillainsComponent } from './components/villans/villains.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  declarations: [VillainsComponent],
  exports: [VillainsComponent]
})
export class VillainsModule {
}
