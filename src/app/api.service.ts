import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:8080";

  constructor(private httpClient: HttpClient) { }

  //User DB calls
  getUser(user: User): Observable<User> {
    return this.httpClient.get<User>(`${this.PHP_API_SERVER}/api/getUser.php/?userName=${user.userName}&pw=${user.password}`);
  }

  createUser(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/api/createUser.php`, user);
  }

  //Note DB calls
  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }

  createNote(note: Note): Observable<Note>{
    return this.httpClient.post<Note>(`${this.PHP_API_SERVER}/api/create.php`, note);
  }

  updateNote(note: Note){
    return this.httpClient.put<Note>(`${this.PHP_API_SERVER}/api/update.php`, note);   
  }

  deleteNote(id: number){
    return this.httpClient.delete<Note>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }
}
