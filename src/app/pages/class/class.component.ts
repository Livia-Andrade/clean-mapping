import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ElementDialogMappingComponent } from 'src/app/components/element-dialog-mapping/element-dialog-mapping.component';
import { DialogoConfirmacaoComponent } from 'src/app/components/dialogo-confirmacao/dialogo-confirmacao.component';
import { PeriodicElementClassService } from 'src/app/services/periodic-element-class.service';

export interface PeriodicElementClass {
  recurso: string;
  position: number;
  name: string;
  number: string;
  symbol: string;
}
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'recurso', 'name', 'number', 'symbol', 'action'];
  dataSource!: PeriodicElementClass[];

  openDelete(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogoConfirmacaoComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  constructor(public dialog: MatDialog, private PeriodicElementClassService: PeriodicElementClassService) { 
    this.PeriodicElementClassService.getElements().subscribe((data: PeriodicElementClass[]) => {
      this.dataSource  = data;
    });
  }

  ngOnInit(): void {
  }

  openDialog(element: PeriodicElementClass | null): void {
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

  editElement(element: PeriodicElementClass): void {
    this.openDialog(element);
  }

  deleteElement(position: number): void {
    this.dataSource = this.dataSource.filter(p => p.position !== position);
  }

}

