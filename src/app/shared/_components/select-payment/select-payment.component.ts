import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: ['./select-payment.component.scss'],
})
export class SelectPaymentComponent {
  @Input() icon!: string;
  @Input() text!: string;
  @Input() isSelected: boolean = false;
  @Output() select = new EventEmitter<void>();
}
