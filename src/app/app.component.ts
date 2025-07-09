import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButtonComponent } from './shared/_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './shared/_components/secondary-button/secondary-button.component';
import { HeaderComponent } from './_components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
