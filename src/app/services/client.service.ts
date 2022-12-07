import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodicElement } from '../pages/client/client.component';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // url = 'http://localhost:8080';
  private readonly api = '/assets/client.json';

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get<PeriodicElement[]>(this.api).pipe(delay(5000));
  }

}