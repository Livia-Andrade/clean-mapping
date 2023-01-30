import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PeriodicElementy } from '../pages/mapping/mapping.component';

@Injectable()
export class PeriodicElementyService {
  elementApiUrl = '/mapping';

  constructor(private http: HttpClient) { }

  getElements(){
    return this.http.get<PeriodicElementy[]>(this.elementApiUrl);
  }

  createElements(element: PeriodicElementy): Observable<PeriodicElementy> {
    return this.http.post<PeriodicElementy>(this.elementApiUrl, element);
  }

  editElement(element: PeriodicElementy): Observable<PeriodicElementy> {
    return this.http.put<PeriodicElementy>(this.elementApiUrl, element);
  }

  deleteElement(position: number): Observable<any> {
    return this.http.delete<any>(`${this.elementApiUrl}?position=${position}`);
  }
}