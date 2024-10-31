import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: '.app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  isLogged!: boolean;
  constructor(private authServ: AuthService) {
    this.authServ.isLoggedIn$.subscribe((boolean) => (this.isLogged = boolean));
  }
}
