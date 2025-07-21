import { Component } from '@angular/core';
import { InputTextComponent } from '../../shared/_components/input-text/input-text.component';
import { CommonModule } from '@angular/common';
import { SelectPaymentComponent } from '../../shared/_components/select-payment/select-payment.component';
import { CoffeCartComponent } from '../../shared/_components/coffe-cart/coffe-cart.component';
import { PrimaryButtonComponent } from '../../shared/_components/primary-button/primary-button.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [
    InputTextComponent,
    CommonModule,
    SelectPaymentComponent,
    CoffeCartComponent,
    PrimaryButtonComponent,
  ],
})
export class CheckoutComponent {
  selectedPayment: string | null = null;

  methodPaymentList = [
    {
      icon: 'ph ph-credit-card',
      text: 'Cartão de crédito',
    },
    {
      icon: 'ph ph-credit-card',
      text: 'Cartão de débito',
    },
    {
      icon: 'ph ph-credit-card',
      text: 'Dinheiro',
    },
  ];

  onSelectPayment(paymentText: string) {
    this.selectedPayment = paymentText;
  }
}
