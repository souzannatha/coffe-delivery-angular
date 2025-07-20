import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: ['./select-payment.component.scss'],
})
export class SelectPaymentComponent {
  @Input() icon!: string;
  @Input() text!: string;
}
