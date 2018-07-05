import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { State } from '../reducers';
import { StartLoading, StopLoading } from '../actions/layout.actions';

@Injectable()
export class LoadingIndicatorInterceptor implements HttpInterceptor {

  constructor(private store: Store<State>) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.dispatch(new StartLoading());

    return next.handle(req).pipe(tap(evt => {
      if (evt instanceof HttpResponse) {
        this.store.dispatch(new StopLoading());
      }
    }, (error: HttpErrorResponse) => {
      let errMsg: string;
      errMsg = `${error.status} - ${error.statusText || ''} - ${error.url || ''}`;

      this.store.dispatch(new StopLoading());

      throw new Error(errMsg);
    }));
  }
}
