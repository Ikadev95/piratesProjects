import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  logged = false;

  constructor() {}

  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
