import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {

  constructor() {
    EmployeeComponent
   }

  ngOnInit(): void {
  }

}
