import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PeriodicElementTeacher } from '../pages/teacher/teacher.component';

@Injectable()
export class PeriodicElementTeacherService {
  elementApiUrl = '/teacher';

  constructor(private http: HttpClient) { }

  getElements(){
    return this.http.get<PeriodicElementTeacher[]>(this.elementApiUrl);
  }

  createElements(element: PeriodicElementTeacher) {
    return this.http.post<PeriodicElementTeacher>(this.elementApiUrl, element);
  }

  editElement(element: PeriodicElementTeacher) {
    return this.http.put<PeriodicElementTeacher>(this.elementApiUrl, element);
  }

  deleteElement(position: number): Observable<any> {
    return this.http.delete<any>(`${this.elementApiUrl}?position=${position}`);
  }
}