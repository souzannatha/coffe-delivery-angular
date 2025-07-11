import { Component, Input } from '@angular/core';
import { IconWithTextModel } from './models/icon-with-text';

@Component({
  selector: 'app-icon-with-text',
  imports: [],
  templateUrl: './icon-with-text.component.html',
  styleUrl: './icon-with-text.component.scss',
})
export class IconWithTextComponent {
  @Input() data!: IconWithTextModel;
}
