import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, tap } from 'rxjs';
import { PeriodicElement } from '../pages/client/client.component';

@Injectable()
export class PeriodicElementService {
  elementApiUrl = '/client';

  constructor(private http: HttpClient) { }

  getElements(){
    return this.http.get<PeriodicElement[]>(this.elementApiUrl);
  }

  createElements(element: PeriodicElement): Observable<PeriodicElement> {
    return this.http.post<PeriodicElement>(this.elementApiUrl, element);
  }

  editElement(element: PeriodicElement): Observable<PeriodicElement> {
    return this.http.put<PeriodicElement>(this.elementApiUrl, element);
  }

  deleteElement(idUsuario: number): Observable<any> {
    return this.http.delete<any>(`${this.elementApiUrl}?idUsuario=${idUsuario}`);
  }
}
