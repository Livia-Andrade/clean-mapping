import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PeriodicElementMapping } from '../pages/mapping/mapping.component';

@Injectable()
export class PeriodicElementMappingService {
  elementApiUrl = '/mapping';

  constructor(private http: HttpClient) { }

  getElements(){
    return this.http.get<PeriodicElementMapping[]>(this.elementApiUrl);
  }

  createElements(element: PeriodicElementMapping) {
    return this.http.post<PeriodicElementMapping>(this.elementApiUrl, element);
  }

  editElement(element: PeriodicElementMapping) {
    return this.http.put<PeriodicElementMapping>(this.elementApiUrl, element);
  }

  deleteElement(position: number): Observable<any> {
    return this.http.delete<any>(`${this.elementApiUrl}?position=${position}`);
  }
}