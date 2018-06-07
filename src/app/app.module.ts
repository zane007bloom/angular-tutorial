import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { VillainsModule } from './villains/villains.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HeroesModule,
    VillainsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
