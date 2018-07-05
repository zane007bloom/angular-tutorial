import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeroesService } from './services/heroes.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesEditorComponent } from './components/heroes-editor/heroes-editor.component';
import * as fromHeroes from './reducers';
import { HeroEffects } from './effects/hero.effects';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    StoreModule.forFeature('heroState', fromHeroes.reducers),
    EffectsModule.forFeature([HeroEffects])
  ],
  declarations: [HeroesComponent, HeroesEditorComponent],
  exports: [HeroesComponent],
  providers: [HeroesService]
})
export class HeroesModule {
}
