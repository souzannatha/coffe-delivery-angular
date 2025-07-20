import { Component, OnInit } from '@angular/core';
import { InputTextComponent } from '../../shared/_components/input-text/input-text.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [InputTextComponent],
})
export class CheckoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
