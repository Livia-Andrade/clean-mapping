import { Client } from './api-models/client';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
/*import { PeriodicElement } from '../pages/client/client.component';
*/
@Injectable()
export class PeriodicElementService {
  elementApiUrl = '/client';

  constructor(private http: HttpClient) { }

  getElements():Observable<Client>{
    return this.http.get<Client>(this.elementApiUrl);
  }

  createElements(element: Client) {
    return this.http.post<Client>(this.elementApiUrl, element);
  }

  editElement(element: Client) {
    return this.http.put<Client>(this.elementApiUrl, element);
  }

  deleteElement(idUsuario: number): Observable<any> {
    return this.http.delete<any>(`${this.elementApiUrl}?idUsuario=${idUsuario}`);
  }
}
