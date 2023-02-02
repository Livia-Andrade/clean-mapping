import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PeriodicElement } from '../pages/client/client.component';

@Injectable()
export class PeriodicElementService {
  elementApiUrl = '/client';

  constructor(private http: HttpClient) { }

  getElements(){
    return this.http.get<PeriodicElement[]>(this.elementApiUrl);
  }

  createElements(element: PeriodicElement) {
    return this.http.post<PeriodicElement>(this.elementApiUrl, element);
  }

  editElement(element: PeriodicElement) {
    return this.http.put<PeriodicElement>(this.elementApiUrl, element);
  }

  deleteElement(position: number): Observable<any> {
    return this.http.delete<any>(`${this.elementApiUrl}?position=${position}`);
  }
}