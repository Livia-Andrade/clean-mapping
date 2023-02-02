import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ElementDialogMappingComponent } from 'src/app/components/element-dialog-mapping/element-dialog-mapping.component';
import { DialogoConfirmacaoComponent } from 'src/app/components/dialogo-confirmacao/dialogo-confirmacao.component';
import { PeriodicElementMappingService } from 'src/app/services/periodic-element-mapping.service';
import { PeriodicElementTeacherService } from 'src/app/services/periodic-element-teacher.service';

export interface PeriodicElementTeacher {
  recurso: string;
  position: number;
  name: string;
  number: string;
  symbol: string;
}
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'recurso', 'name', 'number', 'symbol', 'action'];
  dataSource!: PeriodicElementTeacher[];

  openDelete(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogoConfirmacaoComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  constructor(public dialog: MatDialog, private PeriodicElementTeacherService: PeriodicElementTeacherService) { 
    this.PeriodicElementTeacherService.getElements().subscribe((data: PeriodicElementTeacher[]) => {
      this.dataSource  = data;
    });
  }

  ngOnInit(): void {
  }

  openDialog(element: PeriodicElementTeacher | null): void {
    const dialogRef = this.dialog.open(ElementDialogMappingComponent, {
      width: '250px',
      data: element == null ? {
        recurso: null,
        position: null,
        name: '',
        number: null,
        symbol: ''
      } : {
        recurso: element.recurso,
        position: element.position,
        name: element.name,
        number: element.number,
        symbol: element.symbol
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        if (this.dataSource.map(p => p.position).includes(result.position)) {
          this.dataSource[result.position - 1] = result;
          this.table.renderRows();
        } else {
          this.dataSource.push(result);
          this.table.renderRows();
        }
      }
    });
  }

  editElement(element: PeriodicElementTeacher): void {
    this.openDialog(element);
  }

  deleteElement(position: number): void {
    this.dataSource = this.dataSource.filter(p => p.position !== position);
  }

}
