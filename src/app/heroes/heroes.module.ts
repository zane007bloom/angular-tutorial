import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesEditorComponent } from './components/heroes-editor/heroes-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeroesService } from './services/heroes.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  declarations: [HeroesComponent, HeroesEditorComponent],
  exports: [HeroesComponent],
  providers: [HeroesService]
})
export class HeroesModule {
}
