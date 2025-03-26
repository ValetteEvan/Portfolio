import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilComponent } from './profil/profil.component'; // Import du composant Profil

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true, // Marque AppComponent comme standalone
  imports: [ProfilComponent], // Import du composant Profil
})
export class AppComponent {
  title = 'mon-portfolio';
}
