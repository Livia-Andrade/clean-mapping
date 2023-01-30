import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { PeriodicElement } from '../pages/client/client.component';

import { delay } from 'rxjs';



@Injectable({

  providedIn: 'root'

})

export class ClientService {

  // private myurl = 'http://localhost:8080/client';

  private readonly api = '/client';
  constructor(private httpClient: HttpClient) { }

  listar() {
    // return this.httpClient.get<PeriodicElement[]>(this.myurl).pipe(delay(2500));
    return this.httpClient.get<PeriodicElement[]>(this.api);
  }

}