import { Idata } from './Idata';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getData() {
    return this.httpClient.get<Idata[]>('http://localhost:5000/api/data');
  }
}
