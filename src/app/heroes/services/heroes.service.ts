import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable()
export class HeroesService {

  private endPoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  public getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.endPoint + '/heroes');
  }

  public update(hero: Hero) {
    return this.httpClient.put(this.endPoint + '/heroes/' + hero.id, hero);
  }

  public create(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.endPoint + '/heroes/', hero);
  }
}
