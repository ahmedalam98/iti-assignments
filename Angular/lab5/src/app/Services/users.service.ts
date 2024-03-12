import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  private readonly URL_DB = 'http://localhost:3000/users';

  lastUserId: any = this.http.get<any[]>(this.URL_DB).subscribe((users) => {
    this.lastUserId = users.length;
  });

  getUsers(): any {
    return this.http.get<any[]>(this.URL_DB);
  }

  getUser(id: number): any {
    return this.http.get<any>(`${this.URL_DB}/${id}`);
  }

  addUser(user: any): any {
    return this.http.post(this.URL_DB, { ...user, id: this.lastUserId + 1 });
  }

  updateUser(user: any): any {
    return this.http.put(`${this.URL_DB}/${user.id}`, user);
  }

  deleteUser(id: number): any {
    return this.http.delete(`${this.URL_DB}/${id}`);
  }
}
