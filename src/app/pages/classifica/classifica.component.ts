import { Component, OnInit } from '@angular/core';
import { iUser } from '../../interfaces/i-user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.scss'],
})
export class ClassificaComponent implements OnInit {
  userArr: iUser[] = [];
  userArrOrd: iUser[] = [];

  constructor(private userServ: UserService) {
    this.getAllUser();
    setTimeout(() => console.log(this.userArr, this.userArrOrd), 2000);
  }

  ngOnInit() {
    // this.userArrOrd = this.ordinamentoUserArr();
  }

  getAllUser() {
    this.userServ.getAll().subscribe((user) => {
      this.userArr = user;
    });
  }

  // ordinamentoUserArr() {
  //   return this.userArr.sort((a, b) => b.score - a.score);
  // }

  ordinamentoUserArr() {
    let riferimento = this.userArr[0];

    this.userArr.forEach((user) => {
      if (user.score > riferimento.score) {
        riferimento.score = user.score;
        this.userArrOrd.push(riferimento);
      }
    });
  }
}
