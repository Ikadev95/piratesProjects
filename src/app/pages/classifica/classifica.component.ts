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

  constructor(private userServ: UserService) {}

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.userServ.getAll().subscribe((user) => {
      this.userArr = user;
      this.userArrOrd = this.ordinamentoUserArr();
      console.log(this.userArr);
      console.log(this.userArrOrd);
    });
  }

  ordinamentoUserArr() {
    return this.userArr.sort((a, b) => b.score - a.score);
  }
}
