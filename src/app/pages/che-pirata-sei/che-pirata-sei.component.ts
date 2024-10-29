import { Component } from '@angular/core';
import { iUser } from '../../interfaces/i-user';
import { AuthService } from '../../services/auth.service';
import { iDomanda } from '../../interfaces/i-domanda';
import { ChePirataSeiService } from '../../services/che-pirata-sei.service';
import { iRuolo } from '../../interfaces/i-ruolo';

@Component({
  selector: 'app-che-pirata-sei',
  templateUrl: './che-pirata-sei.component.html',
  styleUrl: './che-pirata-sei.component.scss',
})
export class ChePirataSeiComponent {
  user!: iUser;
  finedomande: boolean = false;
  index: number = 0;

  scopriRuolo: boolean = false;
  domande: iDomanda[] = [];
  domandeShuffle: iDomanda[] = [];

  ruoli: iRuolo = {
    capitano: 0,
    mozzo: 0,
    spugna: 0,
    corsaro: 0,
    navigatore: 0,
    cannoniere: 0,
  };

  ruoloFinale!: string;

  constructor(
    private authServ: AuthService,
    private chePirataSeiServ: ChePirataSeiService
  ) {
    authServ.user$.subscribe((userS) => {
      if (userS) {
        this.user = userS;
      }
    });
    this.domande = this.chePirataSeiServ.domande;
    this.domandeShuffle = this.chePirataSeiServ.shuffleArray(this.domande);
  }

  ngOnInit() {}

  button() {
    this.finedomande = false;
    this.scopriRuolo = true;
    this.buttonFinal();
    console.log(this.ruoloFinale);
  }
  // --------------metodo che pirata sei---------------------
  buttonFinal() {
    let riferimento: { ruolo: string; punteggio: number } = {
      ruolo: '',
      punteggio: 0,
    };
    riferimento.punteggio = this.ruoli.capitano;
    riferimento.ruolo = 'capitano';
    if (this.ruoli.cannoniere > riferimento.punteggio) {
      riferimento.ruolo = 'cannoniere';
      riferimento.punteggio = this.ruoli.cannoniere;
    }
    if (this.ruoli.corsaro > riferimento.punteggio) {
      riferimento.punteggio = this.ruoli.corsaro;
      riferimento.ruolo = 'corsaro';
    }
    if (this.ruoli.mozzo > riferimento.punteggio) {
      riferimento.punteggio = this.ruoli.mozzo;
      riferimento.ruolo = 'mozzo';
    }
    if (this.ruoli.navigatore > riferimento.punteggio) {
      riferimento.punteggio = this.ruoli.navigatore;
      riferimento.ruolo = 'navigatore';
    }
    if (this.ruoli.spugna > riferimento.punteggio) {
      riferimento.punteggio = this.ruoli.spugna;
      riferimento.ruolo = 'spugna';
    }
    this.ruoloFinale = riferimento.ruolo;
  }
  // ----------------------------------------------------------------

  incrementaIndex() {
    if (this.index < 6) {
      this.index++;
      return;
    }
    this.finedomande = true;
  }

  incrementCapitano() {
    this.ruoli.capitano++;
    this.incrementaIndex();
  }

  incrementMozzo() {
    this.ruoli.mozzo++;
    this.incrementaIndex();
  }

  incrementCannoniere() {
    this.ruoli.cannoniere++;
    this.incrementaIndex();
  }

  incrementCorsaro() {
    this.ruoli.corsaro++;
    this.incrementaIndex();
  }

  incrementSpugna() {
    this.ruoli.spugna++;
    this.incrementaIndex();
  }

  incrementNavigatore() {
    this.ruoli.navigatore++;
    this.incrementaIndex();
  }
}
