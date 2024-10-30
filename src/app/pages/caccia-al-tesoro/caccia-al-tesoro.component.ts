import { Component } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

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
    } else {
      this.indizio1 = false;
      this.indizio2 = false;
      this.indizio3 = false;
      this.indizio4 = false;
      this.indizio5 = false;
      this.indizio6 = false;
    }
  }
}
