import { Component } from '@angular/core';
import { InputTextComponent } from '../../shared/_components/input-text/input-text.component';
import { InputText } from '../../shared/_components/input-text/models/input-text';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [InputTextComponent, CommonModule],
})
export class CheckoutComponent {}
