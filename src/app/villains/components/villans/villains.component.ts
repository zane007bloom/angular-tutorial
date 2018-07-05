import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Villain } from '../../models/villain.model';

@Component({
  selector: 'villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillainsComponent implements OnInit {
  villains: Villain[];

  constructor() {
  }

  ngOnInit() {
    this.villains = [{id: 1, name: 'Joker'}, {id: 2, name: 'Lex Luther'}];
  }

}
