import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PeriodicElementEnvironment } from '../pages/environment/environment.component';

@Injectable()
export class PeriodicElementEnvironmentService {
  elementApiUrl = '/environment';

  constructor(private http: HttpClient) { }

  getElements(){
    return this.http.get<PeriodicElementEnvironment[]>(this.elementApiUrl);
  }

  createElements(element: PeriodicElementEnvironment) {
    return this.http.post<PeriodicElementEnvironment>(this.elementApiUrl, element);
  }

  editElement(element: PeriodicElementEnvironment) {
    return this.http.put<PeriodicElementEnvironment>(this.elementApiUrl, element);
  }

  deleteElement(position: number): Observable<any> {
    return this.http.delete<any>(`${this.elementApiUrl}?position=${position}`);
  }
  
}