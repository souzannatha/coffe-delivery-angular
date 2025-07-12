import { Component, Input } from '@angular/core';
import { coffeeCard } from './models/coffee-card';

@Component({
  selector: 'app-coffe-card',
  templateUrl: './coffe-card.component.html',
  styleUrls: ['./coffe-card.component.scss'],
})
export class CoffeCardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() detail!: string;
  @Input() image!: string;
}
