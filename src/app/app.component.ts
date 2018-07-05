import { Component } from '@angular/core';
import { selectIsLoading, State } from './reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoading$ = this.store.select(selectIsLoading);

  constructor(private store: Store<State>) {
  }

}
