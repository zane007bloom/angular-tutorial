import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable()
export class HeroesService {

  constructor(private httpClient: HttpClient) {
  }

  public getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>('http://localhost:3000/heroes');
  }

  update(hero: Hero) {
    return this.httpClient.put('http://localhost:3000/heroes/' + hero.id, hero);
  }

  create(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>('http://localhost:3000/heroes/', hero);
  }
}
