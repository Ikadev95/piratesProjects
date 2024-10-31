import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl: string = environment.userUrl;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<iUser[]>(this.userUrl);
  }
}
