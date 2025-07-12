import { Component, Input } from '@angular/core';
import { coffeeCard } from './models/coffee-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coffe-card',
  templateUrl: './coffe-card.component.html',
  imports: [RouterLink],
  styleUrls: ['./coffe-card.component.scss'],
})
export class CoffeCardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() detail!: string;
  @Input() image!: string;
}
