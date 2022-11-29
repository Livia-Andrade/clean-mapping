import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService) { }

  departments = [
    {id: 1, value: 'Ambiente'},
    {id: 2, value: 'Docente'},
    {id: 3, value: 'Diciplina'},
    {id: 4, value: 'Equipamento'},
    {id: 5, value: 'Turma'}
  ]
  ngOnInit(): void {
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }


}
