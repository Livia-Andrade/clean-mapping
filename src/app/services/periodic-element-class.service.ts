import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PeriodicElementClass } from '../pages/class/class.component';

@Injectable()
export class PeriodicElementClassService {
  elementApiUrl = '/class';

  constructor(private http: HttpClient) { }

  getElements(){
    return this.http.get<PeriodicElementClass[]>(this.elementApiUrl);
  }

  createElements(element: PeriodicElementClass) {
    return this.http.post<PeriodicElementClass>(this.elementApiUrl, element);
  }

  editElement(element: PeriodicElementClass) {
    return this.http.put<PeriodicElementClass>(this.elementApiUrl, element);
  }

  deleteElement(position: number): Observable<any> {
    return this.http.delete<any>(`${this.elementApiUrl}?position=${position}`);
  }
}