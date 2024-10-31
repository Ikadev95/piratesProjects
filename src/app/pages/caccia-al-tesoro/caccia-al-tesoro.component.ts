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
  indizi: boolean[] = Array(16).fill(false);
  indiziIndex: number = 0;
  finegioco: boolean = false;
  contaclick: number = 0;
  punteggio: number = 115;
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

  resetIndiziFino(index: number) {
    for (let i = 0; i <= index; i++) {
      this.indizi[i] = false;
    }
  }

  primostep() {
    this.incrementaClick();
    this.indizi[0] = true;
  }

  secondostep() {
    this.incrementaClick();
    if (this.indizi[0]) {
      this.indizi[1] = true;
    }
  }

  terzostep() {
    this.incrementaClick();
    if (this.indizi[1]) {
      this.indizi[2] = true;
    } else {
      this.resetIndiziFino(0);
    }
  }

  quartostep() {
    this.incrementaClick();
    if (this.indizi[2]) {
      this.indizi[3] = true;
    } else {
      this.resetIndiziFino(1);
    }
  }

  quintostep() {
    this.incrementaClick();
    if (this.indizi[3]) {
      this.indizi[4] = true;
    } else {
      this.resetIndiziFino(2);
    }
  }

  sestostep() {
    this.incrementaClick();
    if (this.indizi[4]) {
      this.indizi[5] = true;
    } else {
      this.resetIndiziFino(3);
    }
  }

  settimostep() {
    this.incrementaClick();
    if (this.indizi[5]) {
      this.indizi[6] = true;
    } else {
      this.resetIndiziFino(4);
    }
  }

  ottimostep() {
    this.incrementaClick();
    if (this.indizi[6]) {
      this.indizi[7] = true;
    } else {
      this.resetIndiziFino(5);
    }
  }

  nonostep() {
    this.incrementaClick();
    if (this.indizi[7]) {
      this.indizi[8] = true;
    } else {
      this.resetIndiziFino(6);
    }
  }

  decimostep() {
    this.incrementaClick();
    if (this.indizi[8]) {
      this.indizi[9] = true;
    } else {
      this.resetIndiziFino(7);
    }
  }

  undicesimostep() {
    this.incrementaClick();
    if (this.indizi[9]) {
      this.indizi[10] = true;
    } else {
      this.resetIndiziFino(8);
    }
  }

  dodicesimostep() {
    this.incrementaClick();
    if (this.indizi[10]) {
      this.indizi[11] = true;
    } else {
      this.resetIndiziFino(9);
    }
  }

  tredicesimostep() {
    this.incrementaClick();
    if (this.indizi[11]) {
      this.indizi[12] = true;
    } else {
      this.resetIndiziFino(10);
    }
  }

  quattordicesimostep() {
    this.incrementaClick();
    if (this.indizi[12]) {
      this.indizi[13] = true;
    } else {
      this.resetIndiziFino(11);
    }
  }

  // quindicesimostep() {
  //   this.incrementaClick();
  //   if (this.indizi[13]) {
  //     this.indizi[14] = true;
  //   } else {
  //     this.resetIndiziFino(12);
  //   }
  // }

  quindicesimostep() {
    this.incrementaClick();
    if (this.indizi[13]) {
      this.indizi[14] = true;
      this.finegioco = true;
      this.punteggio -= this.contaclick;
      if (this.user.id) {
        this.addScoreAtUser(this.user.id, this.user.score, this.punteggio);
        console.log('punteggio', this.punteggio);
        console.log('score', this.user.score);
      }
    } else {
      this.resetIndiziFino(13);
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
