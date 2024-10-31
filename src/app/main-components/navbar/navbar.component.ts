import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: '.app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isLogged!: boolean;
  isMenuOpen: boolean = false;

  constructor(private authServ: AuthService) {
    this.authServ.isLoggedIn$.subscribe((boolean) => (this.isLogged = boolean));
  }

  logout() {
    this.authServ.logout();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
