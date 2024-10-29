import { Component } from '@angular/core';
import { iUser } from '../../interfaces/i-user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-che-pirata-sei',
  templateUrl: './che-pirata-sei.component.html',
  styleUrl: './che-pirata-sei.component.scss',
})
export class ChePirataSeiComponent {
  user!: iUser;
  domanda1: boolean = true;
  domanda2: boolean = false;
  domanda3: boolean = false;
  domanda4: boolean = false;
  domanda5: boolean = false;
  domanda6: boolean = false;
  domanda7: boolean = false;
  finedomande: boolean = false;
  fineQuiz: boolean = false;

  scopriRuolo: boolean = false;
  ruoli = {
    capitano: 0,
    mozzo: 0,
    spugna: 0,
    corsaro: 0,
    navigatore: 0,
    cannoniere: 0,
  };

  ruoloFinale!: string;

  constructor(private authServ: AuthService) {
    authServ.user$.subscribe((userS) => {
      if (userS) {
        this.user = userS;
      }
    });
  }

  ngOnInit() {}

  // ------------------------------RISPOSTE 1PAGINA------------------------------------
  buttonNav1() {
    this.domanda1 = false;
    this.domanda2 = true;
    this.incrementNavigatore();
  }

  buttonCap1() {
    this.domanda1 = false;
    this.domanda2 = true;
    this.incrementCapitano();
  }

  buttonMozzo1() {
    this.domanda1 = false;
    this.domanda2 = true;
    this.incrementMozzo();
  }

  buttonSpu1() {
    this.domanda1 = false;
    this.domanda2 = true;
    this.incrementSpugna();
  }

  buttonCann1() {
    this.domanda1 = false;
    this.domanda2 = true;
    this.incrementCannoniere();
  }

  buttonCors1() {
    this.domanda1 = false;
    this.domanda2 = true;
    this.incrementCorsaro();
  }

  // ------------------------------RISPOSTE 2PAGINA------------------------------------

  buttonNav2() {
    this.domanda2 = false;
    this.domanda3 = true;

    this.incrementNavigatore();
  }

  buttonCap2() {
    this.domanda2 = false;
    this.domanda3 = true;
    this.incrementCapitano();
  }

  buttonMozzo2() {
    this.domanda2 = false;
    this.domanda3 = true;
    this.incrementMozzo();
  }

  buttonSpu2() {
    this.domanda2 = false;
    this.domanda3 = true;
    this.incrementSpugna();
  }

  buttonCann2() {
    this.domanda2 = false;
    this.domanda3 = true;
    this.incrementCannoniere();
  }

  buttonCors2() {
    this.domanda2 = false;
    this.domanda3 = true;
    this.incrementCorsaro();
  }

  // ------------------------------RISPOSTE 3PAGINA------------------------------------
  buttonNav3() {
    this.domanda3 = false;
    this.domanda4 = true;

    this.incrementNavigatore();
  }

  buttonCap3() {
    this.domanda3 = false;
    this.domanda4 = true;
    this.incrementCapitano();
  }

  buttonMozzo3() {
    this.domanda3 = false;
    this.domanda4 = true;
    this.incrementMozzo();
  }

  buttonSpu3() {
    this.domanda3 = false;
    this.domanda4 = true;
    this.incrementSpugna();
  }

  buttonCann3() {
    this.domanda3 = false;
    this.domanda4 = true;
    this.incrementCannoniere();
  }

  buttonCors3() {
    this.domanda3 = false;
    this.domanda4 = true;
    this.incrementCorsaro();
  }

  // ------------------------------RISPOSTE 4PAGINA------------------------------------
  buttonNav4() {
    this.domanda4 = false;
    this.domanda5 = true;

    this.incrementNavigatore();
  }

  buttonCap4() {
    this.domanda4 = false;
    this.domanda5 = true;
    this.incrementCapitano();
  }

  buttonMozzo4() {
    this.domanda4 = false;
    this.domanda5 = true;
    this.incrementMozzo();
  }

  buttonSpu4() {
    this.domanda4 = false;
    this.domanda5 = true;
    this.incrementSpugna();
  }

  buttonCann4() {
    this.domanda4 = false;
    this.domanda5 = true;
    this.incrementCannoniere();
  }

  buttonCors4() {
    this.domanda4 = false;
    this.domanda5 = true;
    this.incrementCorsaro();
  }

  // ------------------------------RISPOSTE 5PAGINA------------------------------------
  buttonNav5() {
    this.domanda5 = false;
    this.domanda6 = true;

    this.incrementNavigatore();
  }

  buttonCap5() {
    this.domanda5 = false;
    this.domanda6 = true;
    this.incrementCapitano();
  }

  buttonMozzo5() {
    this.domanda5 = false;
    this.domanda6 = true;
    this.incrementMozzo();
  }

  buttonSpu5() {
    this.domanda5 = false;
    this.domanda6 = true;
    this.incrementSpugna();
  }

  buttonCann5() {
    this.domanda5 = false;
    this.domanda6 = true;
    this.incrementCannoniere();
  }

  buttonCors5() {
    this.domanda5 = false;
    this.domanda6 = true;
    this.incrementCorsaro();
  }

  // ------------------------------RISPOSTE 6PAGINA------------------------------------
  buttonNav6() {
    this.domanda6 = false;
    this.domanda7 = true;

    this.incrementNavigatore();
  }

  buttonCap6() {
    this.domanda6 = false;
    this.domanda7 = true;
    this.incrementCapitano();
  }

  buttonMozzo6() {
    this.domanda6 = false;
    this.domanda7 = true;
    this.incrementMozzo();
  }

  buttonSpu6() {
    this.domanda6 = false;
    this.domanda7 = true;
    this.incrementSpugna();
  }

  buttonCann6() {
    this.domanda6 = false;
    this.domanda7 = true;
    this.incrementCannoniere();
  }

  buttonCors6() {
    this.domanda6 = false;
    this.domanda7 = true;
    this.incrementCorsaro();
  }

  // ------------------------------RISPOSTE 7PAGINA------------------------------------
  buttonNav7() {
    this.domanda7 = false;
    this.finedomande = true;

    this.incrementNavigatore();
  }

  buttonCap7() {
    this.domanda7 = false;
    this.finedomande = true;
    this.incrementCapitano();
  }

  buttonMozzo7() {
    this.domanda7 = false;
    this.finedomande = true;
    this.incrementMozzo();
  }

  buttonSpu7() {
    this.domanda7 = false;
    this.finedomande = true;
    this.incrementSpugna();
  }

  buttonCann7() {
    this.domanda7 = false;
    this.finedomande = true;
    this.incrementCannoniere();
  }

  buttonCors7() {
    this.domanda7 = false;
    this.finedomande = true;
    this.incrementCorsaro();
  }

  //  -------bottone fine quiz

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

  incrementCapitano() {
    this.ruoli.capitano++;
  }

  incrementMozzo() {
    this.ruoli.mozzo++;
  }

  incrementCannoniere() {
    this.ruoli.cannoniere++;
  }

  incrementCorsaro() {
    this.ruoli.corsaro++;
  }

  incrementSpugna() {
    this.ruoli.spugna++;
  }

  incrementNavigatore() {
    this.ruoli.navigatore++;
  }
}
