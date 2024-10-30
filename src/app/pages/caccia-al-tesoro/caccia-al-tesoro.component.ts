import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { iUser } from '../../interfaces/i-user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-caccia-al-tesoro',
  templateUrl: './caccia-al-tesoro.component.html',
  styleUrl: './caccia-al-tesoro.component.scss',
})
export class CacciaAlTesoroComponent {
  indizio1: boolean = false;
  indizio2: boolean = false;
  indizio3: boolean = false;
  indizio4: boolean = false;
  indizio5: boolean = false;
  indizio6: boolean = false;
  indizio7: boolean = false;
  indizio8: boolean = false;
  finegioco: boolean = false;
  contaclick: number = 0;
  punteggio: number = 116;
  user!: iUser;
  userUrl: string = environment.userUrl;
  isRecord: boolean = false;

  constructor(private authServ: AuthService, private http: HttpClient) {
    this.authServ.user$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  ngOnInit() {
    setTimeout(() => console.log(this.user), 2000);
  }

  incrementaClick() {
    this.contaclick++;
    console.log(this.contaclick);
  }

  primostep() {
    this.incrementaClick();
    this.indizio1 = true;
  }

  secondostep() {
    this.incrementaClick();
    if (this.indizio1) {
      this.indizio2 = true;
    }
  }

  terzostep() {
    this.incrementaClick();
    if (this.indizio2) {
      this.indizio3 = true;
    } else {
      this.indizio1 = false;
    }
  }

  quartostep() {
    this.incrementaClick();
    if (this.indizio3) {
      this.indizio4 = true;
    } else {
      this.indizio1 = false;
      this.indizio2 = false;
    }
  }

  quintostep() {
    this.incrementaClick();
    if (this.indizio4) {
      this.indizio5 = true;
    } else {
      this.indizio1 = false;
      this.indizio2 = false;
      this.indizio3 = false;
    }
  }

  sestostep() {
    this.incrementaClick();
    if (this.indizio5) {
      this.indizio6 = true;
    } else {
      this.indizio1 = false;
      this.indizio2 = false;
      this.indizio3 = false;
      this.indizio4 = false;
    }
  }

  settimostep() {
    this.incrementaClick();
    if (this.indizio6) {
      this.indizio7 = true;
    } else {
      this.indizio1 = false;
      this.indizio2 = false;
      this.indizio3 = false;
      this.indizio4 = false;
      this.indizio5 = false;
    }
  }

  ottimostep() {
    this.incrementaClick();
    if (this.indizio7) {
      this.indizio8 = true;
      this.finegioco = true;
      this.punteggio -= this.contaclick;
      if (this.user.id) {
        this.addScoreAtUser(this.user.id, this.user.score, this.punteggio);

        console.log('punteggio', this.punteggio);
        console.log('score', this.user.score);
      }
    } else {
      this.indizio1 = false;
      this.indizio2 = false;
      this.indizio3 = false;
      this.indizio4 = false;
      this.indizio5 = false;
      this.indizio6 = false;
    }
  }
  addScoreAtUser(id: number, scoreValue: number, punteggio: number) {
    console.log(scoreValue);

    if (punteggio > scoreValue) {
      console.log('user.score', this.user.score);
      this.isRecord = true;

      const headers = { 'Content-Type': 'application/json' };
      scoreValue = punteggio;
      console.log(scoreValue);

      return this.http
        .patch<iUser>(
          `${this.userUrl}/${id}`,
          { score: scoreValue },
          { headers }
        )
        .subscribe({
          next: (updatedUser) => {
            console.log('Patch successful:', updatedUser);
            this.authServ.updateUserScore(updatedUser);
          },
          error: (error) => console.error('Error during patch:', error),
        });
    } else {
      return this.user;
    }
  }
}
