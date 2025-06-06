import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { TitleComponentComponent } from './title-component/title-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [
    TitleComponentComponent,
    NavBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
