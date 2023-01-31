import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ElementDialogMappingComponent } from 'src/app/components/element-dialog-mapping/element-dialog-mapping.component';
import { DialogoConfirmacaoComponent } from 'src/app/components/dialogo-confirmacao/dialogo-confirmacao.component';
import { PeriodicElementMappingService } from 'src/app/services/periodic-element-mapping.service';

export interface PeriodicElementMapping {
  recurso: string;
  position: number;
  name: string;
  number: string;
  symbol: string;
}

//Ambiente, Diciplina, Docente, Equipamento, Turma
//ID, NOME, NÚMERO, OBSERVAÇÃO 

// const ELEMENT_DATA: PeriodicElementMapping[] = [
//   { recurso: 'Equipment', position: 1, name: 'Machine', number: '10', symbol: 'Working' },
//   { recurso: 'Equipment', position: 2, name: 'Machine', number: '9', symbol: 'Working' },
//   { recurso: 'Equipment', position: 3, name: 'Machine', number: '8', symbol: 'Working' },
//   { recurso: 'Equipment', position: 4, name: 'Machine', number: '7', symbol: 'Working' },
//   { recurso: 'Equipment', position: 5, name: 'Machine', number: '6', symbol: 'Working' },
//   { recurso: 'Equipment', position: 6, name: 'Machine', number: '5', symbol: 'Working' },
//   { recurso: 'Equipment', position: 7, name: 'Machine', number: '4', symbol: 'Working' },
//   { recurso: 'Equipment', position: 8, name: 'Machine', number: '3', symbol: 'Working' },
//   { recurso: 'Equipment', position: 9, name: 'Machine', number: '2', symbol: 'Working' },
//   { recurso: 'Equipment', position: 10, name: 'Machine', number: '1', symbol: 'Working' },
// ];


@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'recurso', 'name', 'number', 'symbol', 'action'];
  dataSource!: PeriodicElementMapping[];

  openDelete(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogoConfirmacaoComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  constructor(public dialog: MatDialog, private periodicElementMappingService: PeriodicElementMappingService) { 
    this.periodicElementMappingService.getElements().subscribe((data: PeriodicElementMapping[]) => {
      this.dataSource  = data;
    });
  }

  ngOnInit(): void {
  }

  openDialog(element: PeriodicElementMapping | null): void {
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

  editElement(element: PeriodicElementMapping): void {
    this.openDialog(element);
  }

  deleteElement(position: number): void {
    this.dataSource = this.dataSource.filter(p => p.position !== position);
  }

  // @Component({
  //   selector: 'app-dialogo-confirmacao',
  //   templateUrl: './dialogo-confirmacao.component.html',
  // })
  // export class DialogoConfirmacaoComponent {
  //   constructor(public dialogRef: MatDialogRef<DialogoConfirmacaoComponent >) {}
  // } 
}



