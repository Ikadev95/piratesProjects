import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { iUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root',
})
export class CacciaAlTesoroService {
  constructor(private http: HttpClient) {}
  userUrl: string = environment.userUrl;

  getAllUser() {
    return this.http.get<iUser[]>(this.userUrl);
  }

  addScoreAtUser(id: number, scoreValue: number) {
    return this.http.patch(`${this.userUrl}/${id}`, { score: scoreValue });
  }
}
