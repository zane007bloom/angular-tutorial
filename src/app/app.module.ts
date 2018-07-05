import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { VillainsModule } from './villains/villains.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingIndicatorInterceptor } from './services/loading-indicator.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const httpInterceptor = {
  provide: HTTP_INTERCEPTORS, useClass: LoadingIndicatorInterceptor, multi: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HeroesModule,
    VillainsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([])
  ],
  providers: [httpInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule {
}
