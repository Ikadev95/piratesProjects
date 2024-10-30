import { CacciaAlTesoroService } from './../../services/caccia-al-tesoro.service';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { iUser } from '../../interfaces/i-user';

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
  users!: iUser[];
  user!: iUser;
  isRecord: boolean = false;

  constructor(
    private authServ: AuthService,
    private cacciaServ: CacciaAlTesoroService
  ) {
    this.getAllUsers();
    this.authServ.user$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
    console.log('user', this.user);
    setTimeout(() => console.log('userArray', this.users), 2000);
  }

  ngOnInit() {
    console.log(this.user);
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
      this.punteggio -= this.contaclick;
      this.user.score = this.punteggio;
      if (this.user.id) {
        this.addScoreAtUser(this.user.id, this.user.score);
      }
      setTimeout(this.waitPatch, 2000);

      console.log(this.user);
    } else {
      this.indizio1 = false;
      this.indizio2 = false;
      this.indizio3 = false;
      this.indizio4 = false;
      this.indizio5 = false;
      this.indizio6 = false;
    }
  }

  getAllUsers() {
    this.cacciaServ.getAllUser().subscribe((user) => (this.users = user));
  }

  addScoreAtUser(id: number, score: number) {
    this.cacciaServ.addScoreAtUser(id, score).subscribe();
  }

  waitPatch() {
    this.finegioco = true;
    if (this.user.score) {
      if (this.punteggio > this.user.score) {
        this.isRecord = true;
      }
    }
    this.user.score = this.punteggio;
    return this.user.score;
  }
}
