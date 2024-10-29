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

  constructor() {}

  ngOnInit() {}

  primostep() {
    this.indizio1 = true;
  }

  secondostep() {
    if (this.indizio1) {
      this.indizio2 = true;
    }
  }

  terzostep() {
    if (this.indizio2) {
      this.indizio3 = true;
    } else {
      this.indizio1 = false;
    }
  }

  quartostep() {
    if (this.indizio3) {
      this.indizio4 = true;
    } else {
      this.indizio1 = false;
      this.indizio2 = false;
    }
  }

  quintostep() {
    if (this.indizio4) {
      this.indizio5 = true;
    } else {
      this.indizio1 = false;
      this.indizio2 = false;
      this.indizio3 = false;
    }
  }

  sestostep() {
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
    if (this.indizio7) {
      this.indizio8 = true;
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
