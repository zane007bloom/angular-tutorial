import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'heroes-editor',
  templateUrl: './heroes-editor.component.html',
  styleUrls: ['./heroes-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesEditorComponent implements OnInit {

  private editingHero: Hero;

  @Input()
  set hero(value: Hero) {
    this.editingHero = new Hero(value.id, value.name);
  }

  get hero() {
    return this.editingHero;
  }

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
