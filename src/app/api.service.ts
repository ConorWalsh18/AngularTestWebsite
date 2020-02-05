import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policy } from './policy';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:8080";
  //PHP_API_SERVER = "http://127.0.0.1:4200";

  constructor(private httpClient: HttpClient) { }

  readPolicies(): Observable<Policy[]> {
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }
}
