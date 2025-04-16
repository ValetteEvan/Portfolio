import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

enum NavBar {
  About = 1,
  Project = 2,
  Contact = 3
}

@Component({
  selector: 'app-nav-bar',
  imports: [
    CommonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})

export class NavBarComponent implements OnInit{

  NavBar = NavBar;

  currentSection: NavBar = NavBar.About;

  ngOnInit(): void {
    
  }

  setSection(section: NavBar): void {
    this.currentSection = section;
    console.log(this.currentSection);
  }

  getSection(): number {
    return this.currentSection; 
  }

  isCurrentSection(section: NavBar): boolean {
    return this.currentSection === section;
  }

}
