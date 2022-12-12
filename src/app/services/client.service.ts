import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodicElement } from '../pages/client/client.component';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly myurl = 'http://localhost:8080/client';
  // private readonly api = '/assets/client.json';

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get<PeriodicElement[]>(this.myurl);
    //  return this.httpClient.get<PeriodicElement[]>(this.api).pipe(delay(2500));
  }

  // save(record: Client) {
  //   // console.log(record);
  //   this.httpClient.post<Client>(URL: this.myurl, body: record);
  // }
}