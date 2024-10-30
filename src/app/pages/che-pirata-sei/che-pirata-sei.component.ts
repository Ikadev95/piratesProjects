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
  legendaRuolo: string = '';
  mostraQuiz: boolean = true;

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
    this.mostraQuiz = false;

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
    if (this.ruoloFinale === 'capitano') {
      this.legendaRuolo =
        'Capitano 🏴‍☠️: Il capo assoluto e autorevolmente indeciso su quale sia la rotta giusta. Sa esattamente dove andare... finché qualcuno non lo contraddice!';
      return;
    }
    if (this.ruoloFinale === 'spugna') {
      this.legendaRuolo =
        "Spugna 🍺: Colui che prende la vita di mare alla lettera... e beve come se dovesse prosciugare l'oceano. Se c’è del grog nei paraggi, è già mezzo vuoto.";
      return;
    }
    if (this.ruoloFinale === 'cannoniere') {
      this.legendaRuolo =
        'Cannoniere 💣: Artista esplosivo con una mira discutibile. Preferisce sparare prima e chiedere dopo (se ci riesce). Dice sempre: “Non siamo qui per fare amicizia, tranne con la polvere da sparo!”';
      return;
    }
    if (this.ruoloFinale === 'mozzo') {
      this.legendaRuolo =
        'Mozzo 🪣: L’eroe delle pulizie e maestro di stracci e secchi. Sogna avventure incredibili, ma per ora lotta contro la sua nemesi: le macchie di guano sulle assi.”';
      return;
    }
    if (this.ruoloFinale === 'corsaro') {
      this.legendaRuolo =
        'Corsaro ⚔️: Il pirata coi documenti! Tecnicamente non un fuorilegge... o almeno così spera. È quello che minaccia di denunciarvi... a voi stessi.”';
      return;
    }
    if (this.ruoloFinale === 'navigatore') {
      this.legendaRuolo =
        'Navigatore 🧭: Il “GPS” della nave, esperto nel perdersi magnificamente. Assicura a tutti di avere la situazione sotto controllo, anche quando il controllo è bello che perso.”';
      return;
    }
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
