import { Component, OnInit } from '@angular/core';
import { rgba } from 'polished';
import { IconWithTextComponent } from '../../shared/_components/icon-with-text/icon-with-text.component';
import { IconWithTextModel } from '../../shared/_components/icon-with-text/models/icon-with-text';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IconWithTextComponent, CommonModule],
})
export class HomeComponent implements OnInit {
  white = '#ffffff';
  background = '#fafafa';

  backgroundGradient!: string;
  introBackgroundImg = '/assets/background.png';

  ngOnInit() {
    this.backgroundGradient = `url(${this.introBackgroundImg}) repeat center,
      linear-gradient(
        0deg,
        ${this.white} 0%,
        ${rgba(this.background, 0.2)} 50%,
        ${this.background} 100%
      )`;
  }

  iconAndTextList: IconWithTextModel[] = [
    {
      iconClass: 'ph-fill ph-shopping-cart',
      text: 'Compra simples e segura',
      bgColor: '#c47f17',
    },

    {
      iconClass: 'ph-fill ph-package',
      text: 'Embalagem mantém o café intacto',
      bgColor: '#574f4d',
    },
    {
      iconClass: 'ph-fill ph-timer',
      text: 'Entrega rápida e rastreada',
      bgColor: '#dbac2c',
    },
    {
      iconClass: 'ph-fill ph-coffee',
      text: 'O café chega fresquinho até você',
      bgColor: '#8047f8',
    },
  ];
}
