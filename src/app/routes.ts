import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/components/heroes/heroes.component';
import { VillainsComponent } from './villains/components/villans/villains.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'villains', component: VillainsComponent},
  {path: '**', component: HeroesComponent}
];
