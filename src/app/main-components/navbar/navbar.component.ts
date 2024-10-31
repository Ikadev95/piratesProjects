import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: '.app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  logged = false;
  isMenuOpen: boolean = false;

  constructor(private authServ: AuthService) {}

  logout() {
    this.authServ.logout();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
