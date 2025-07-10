import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButtonComponent } from './shared/_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './shared/_components/secondary-button/secondary-button.component';
import { HeaderComponent } from './shared/_components/header/header.component';
import { BaseUiComponent } from './shared/_components/base-ui/base-ui.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BaseUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
