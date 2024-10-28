import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { iAccessData } from '../../interfaces/i-access-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('aggiunto') aggiunto!: ElementRef;

  constructor(private authServ: AuthService) {}

  ngOnInit() {
    this.authServ.restoreUser();
    this.setupAutoLogout();
  }

  setupAutoLogout() {
    this.authServ.authSubject$.subscribe((accessData: iAccessData | null) => {
      if (accessData) {
        const expDate = this.authServ.jwt.getTokenExpirationDate(
          accessData.accessToken
        );
        if (expDate) {
          this.authServ.autoLogout(expDate);
        }
      }
    });
  }
}
