import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css',
  standalone: true,
})
export class ProfilComponent {
  value = 0;
  text: string = 'Merci';
  toggle() {
    this.value++;
    console.log('Merci');
    if (this.value > 10) {
      this.text = 'Merci beaucoup';
    }
  }
}
