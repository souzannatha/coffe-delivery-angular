import { Component, OnInit } from '@angular/core';
import { rgba } from 'polished';
import { IconWithTextComponent } from '../../shared/_components/icon-with-text/icon-with-text.component';
import { IconWithTextModel } from '../../shared/_components/icon-with-text/models/icon-with-text';
import { CommonModule } from '@angular/common';
import { CoffeCardComponent } from '../../shared/_components/coffe-card/coffe-card.component';
import { coffeeCard } from '../../shared/_components/coffe-card/models/coffee-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IconWithTextComponent, CommonModule, CoffeCardComponent],
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
  coffeList: coffeeCard[] = [
    {
      title: 'Expresso Tradicional',
      subtitle: 'O tradicional café feito com água quente e grãos moídos',
      detail: 'Tradicional',
      image: '/assets/coffees/americano.png',
    },
    {
      title: 'Expresso Americano',
      subtitle: 'Expresso diluído, menos intenso que o tradicional',
      detail: 'Tradicional',
      image: '/assets/coffees/americano.png',
    },
    {
      title: 'Expresso Cremoso',
      subtitle: 'Café expresso tradicional com espuma cremosa',
      detail: 'Tradicional',
      image: '/assets/coffees/cremoso.png',
    },
    {
      title: 'Expresso Gelado',
      subtitle: 'Bebida preparada com café expresso e cubos de gelo',
      detail: 'Tradicional',
      image: '/assets/coffees/gelado.png',
    },
    {
      title: 'Café com Leite',
      subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
      detail: 'Tradicional',
      image: '/assets/coffees/leite.png',
    },
    {
      title: 'Latte',
      subtitle:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      detail: 'Tradicional',
      image: '/assets/coffees/latte.png',
    },
    {
      title: 'Capuccino',
      subtitle:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      detail: 'Tradicional',
      image: '/assets/coffees/capuccino.png',
    },
    {
      title: 'Macchiato',
      subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
      detail: 'Tradicional',
      image: '/assets/coffees/macchiato.png',
    },
    {
      title: 'Mocaccino',
      subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
      detail: 'Tradicional',
      image: '/assets/coffees/mocaccino.png',
    },
    {
      title: 'Chocolate Quente',
      subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
      detail: 'Tradicional',
      image: '/assets/coffees/mocaccino.png',
    },
    {
      title: 'Cubano',
      subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
      detail: 'Tradicional',
      image: '/assets/coffees/cubano.png',
    },
    {
      title: 'Havaiano',
      subtitle: 'Bebida adocicada preparada com café e leite de coco',
      detail: 'Tradicional',
      image: '/assets/coffees/havaiano.png',
    },
    {
      title: 'Árabe',
      subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
      detail: 'Tradicional',
      image: '/assets/coffees/arabe.png',
    },
    {
      title: 'Irlandês',
      subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      detail: 'Tradicional',
      image: '/assets/coffees/irlandes.png',
    },
  ];
}
