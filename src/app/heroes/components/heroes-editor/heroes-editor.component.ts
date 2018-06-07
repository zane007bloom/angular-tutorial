import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'heroes-editor',
  templateUrl: './heroes-editor.component.html',
  styleUrls: ['./heroes-editor.component.css']
})
export class HeroesEditorComponent implements OnInit {

  @Input()
  hero: Hero;

  @Output()
  edited = new EventEmitter<Hero>();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.edited.emit(this.hero);
  }


}
