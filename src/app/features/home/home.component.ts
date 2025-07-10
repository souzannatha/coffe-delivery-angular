import { Component, OnInit } from '@angular/core';
import { rgba } from 'polished';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
}
