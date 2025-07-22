import { Component } from '@angular/core';
import { IconWithTextComponent } from '../../shared/_components/icon-with-text/icon-with-text.component';
import { IconWithTextModel } from '../../shared/_components/icon-with-text/models/icon-with-text';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.scss'],
  imports: [IconWithTextComponent, CommonModule],
})
export class SucessComponent {
  iconAndTextList: IconWithTextModel[] = [
    {
      iconClass: 'ph ph-map-pin',
      text: 'Entrega em Rua João Daniel Martinelli, 102',
      bgColor: '#c47f17',
    },
    {
      iconClass: 'ph-fill ph-timer',
      text: 'Previsão de entrega',
      bgColor: '#dbac2c',
    },
    {
      iconClass: 'ph ph-currency-dollar',
      text: 'Pagamento na entrega',
      bgColor: '#8047f8',
    },
  ];
}
