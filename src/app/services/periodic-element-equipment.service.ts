import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PeriodicElementEquipment } from '../pages/equipment/equipment.component';

@Injectable()
export class PeriodicElementEquipmentService {
  elementApiUrl = '/equipment';

  constructor(private http: HttpClient) { }

  getElements(){
    return this.http.get<PeriodicElementEquipment[]>(this.elementApiUrl);
  }

  createElements(element: PeriodicElementEquipment) {
    return this.http.post<PeriodicElementEquipment>(this.elementApiUrl, element);
  }

  editElement(element: PeriodicElementEquipment) {
    return this.http.put<PeriodicElementEquipment>(this.elementApiUrl, element);
  }

  deleteElement(position: number): Observable<any> {
    return this.http.delete<any>(`${this.elementApiUrl}?position=${position}`);
  }
  
}