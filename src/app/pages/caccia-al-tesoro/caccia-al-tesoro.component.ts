import { CacciaAlTesoroService } from './../../services/caccia-al-tesoro.service';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { iUser } from '../../interfaces/i-user';

@Component({
  selector: 'app-caccia-al-tesoro',
  templateUrl: './caccia-al-tesoro.component.html',
  styleUrls: ['./caccia-al-tesoro.component.scss'],
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
  punteggioInizializzato: boolean = false;

  constructor(
    private authServ: AuthService,
    private cacciaServ: CacciaAlTesoroService
  ) {
    this.getAllUsers();

    this.authServ.user$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.punteggioInizializzato = true;
        console.log(
          'Utente loggato caricato e punteggio inizializzato:',
          this.user
        );
      }
    });
    setTimeout(() => console.log('Lista utenti caricata:', this.users), 2000);
  }

  ngOnInit() {
    console.log('ngOnInit: Utente corrente:', this.user);
  }

  incrementaClick() {
    this.contaclick++;
    console.log('Click incrementato:', this.contaclick);
  }

  async verificaInizializzazione() {
    while (!this.punteggioInizializzato) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }

  async primostep() {
    await this.verificaInizializzazione();
    this.incrementaClick();
    this.indizio1 = true;
    console.log('Primo step completato');
  }

  async secondostep() {
    await this.verificaInizializzazione();
    this.incrementaClick();
    if (this.indizio1) {
      this.indizio2 = true;
      console.log('Secondo step completato');
    }
  }

  async terzostep() {
    await this.verificaInizializzazione();
    this.incrementaClick();
    if (this.indizio2) {
      this.indizio3 = true;
      console.log('Terzo step completato');
    } else {
      this.indizio1 = false;
      console.log('Errore: indizio1 non era vero, resetta indizi');
    }
  }

  async quartostep() {
    await this.verificaInizializzazione();
    this.incrementaClick();
    if (this.indizio3) {
      this.indizio4 = true;
      console.log('Quarto step completato');
    } else {
      this.indizio1 = false;
      this.indizio2 = false;
      console.log('Errore: indizio3 non era vero, resetta indizi');
    }
  }

  async quintostep() {
    await this.verificaInizializzazione();
    this.incrementaClick();
    if (this.indizio4) {
      this.indizio5 = true;
      console.log('Quinto step completato');
    } else {
      this.indizio1 = this.indizio2 = this.indizio3 = false;
      console.log('Errore: indizio4 non era vero, resetta indizi');
    }
  }

  async sestostep() {
    await this.verificaInizializzazione();
    this.incrementaClick();
    if (this.indizio5) {
      this.indizio6 = true;
      console.log('Sesto step completato');
    } else {
      this.indizio1 = this.indizio2 = this.indizio3 = this.indizio4 = false;
      console.log('Errore: indizio5 non era vero, resetta indizi');
    }
  }

  async settimostep() {
    await this.verificaInizializzazione();
    this.incrementaClick();
    if (this.indizio6) {
      this.indizio7 = true;
      console.log('Settimo step completato');
    } else {
      this.indizio1 = this.indizio2 = this.indizio3 = this.indizio4 = false;
      this.indizio5 = false;
      console.log('Errore: indizio6 non era vero, resetta indizi');
    }
  }

  async ottimostep() {
    await this.verificaInizializzazione();
    this.incrementaClick();
    if (this.indizio7) {
      this.indizio8 = true;
      this.punteggio -= this.contaclick;
      console.log('Ottavo step completato, punteggio attuale:', this.punteggio);

      if (
        this.user.id &&
        (!this.user.score || this.punteggio > this.user.score)
      ) {
        if (this.user.score) {
          this.addScoreAtUser(this.user.id, this.punteggio, this.user.score);
        } else {
          this.addScoreAtUser(this.user.id, this.punteggio, 0);
        }
        this.isRecord = true;
        console.log('Nuovo record impostato:', this.isRecord);
      } else {
        this.isRecord = false;
        console.log('Nessun nuovo record');
      }

      this.finegioco = true;
      console.log('Gioco terminato, punteggio finale:', this.punteggio);
    } else {
      this.indizio1 = this.indizio2 = this.indizio3 = this.indizio4 = false;
      this.indizio5 = this.indizio6 = this.indizio7 = false;
      console.log('Errore: indizio7 non era vero, resetta indizi');
    }
  }

  addScoreAtUser(id: number, score: number, punteggio: number) {}

  getAllUsers() {
    this.cacciaServ.getAllUser().subscribe((user) => {
      this.users = user;
      console.log('Utenti caricati dal server:', this.users);
    });
  }
}
