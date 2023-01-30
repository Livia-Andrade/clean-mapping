import { MatDialog } from '@angular/material/dialog';
import { ElementDialogComponent } from './../../components/element-dialog/element-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ElementDialogMappingComponent } from 'src/app/components/element-dialog-mapping/element-dialog-mapping.component';
<<<<<<< Updated upstream

=======
import { DialogoConfirmacaoComponent } from 'src/app/components/dialogo-confirmacao/dialogo-confirmacao.component';
import { PeriodicElementyService } from 'src/app/services/periodic-elementy.service';
>>>>>>> Stashed changes

export interface PeriodicElementy {
  position: number;
  recurso: string;
  name: string;
  number: string;
  symbol: string;
}

//Ambiente, Diciplina, Docente, Equipamento, Turma
<<<<<<< Updated upstream
//ID, NOME, NÚMERO, OBSERVAÇÃO 

const ELEMENT_DATA: PeriodicElement[] = [
  { recurso:'Equipamento', position: 1, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { recurso:'Equipamento', position: 2, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { recurso:'Equipamento', position: 3, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { recurso:'Equipamento', position: 4, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { recurso:'Equipamento', position: 5, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { recurso:'Equipamento', position: 6, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { recurso:'Equipamento', position: 7, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { recurso:'Equipamento', position: 8, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { recurso:'Equipamento', position: 9, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { recurso:'Equipamento', position: 10, name: 'Maquina', number: '9', symbol: 'Funcionando' },
];
=======
//ID, RECURSO, NOME, NÚMERO, OBSERVAÇÃO 

// const ELEMENT_DATA: PeriodicElementy[] = [
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
>>>>>>> Stashed changes


@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
<<<<<<< Updated upstream
  displayedColumns: string[] = ['position','recurso', 'name', 'number', 'symbol', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

=======
  displayedColumns: string[] = ['position', 'recurso', 'name', 'number', 'symbol', 'action'];
   // dataSourcee = ELEMENT_DATA;
  dataSourcee!: PeriodicElementy[];

  openDelete(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogoConfirmacaoComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  constructor(public dialog: MatDialog, private periodicElementyService: PeriodicElementyService) { 
    this.periodicElementyService.getElements().subscribe((data: PeriodicElementy[]) => {
      this.dataSourcee  = data;
    });
  }
  
>>>>>>> Stashed changes
  ngOnInit(): void {
  }

   // VINCULANDO ELEMENT DIALOG

  openDialog(element: PeriodicElementy | null): void {
    const dialogRef = this.dialog.open(ElementDialogMappingComponent, {
      width: '250px',
      data: element == null ? {
        recurso: null,
        position: null,
        name: '',
        number: '',
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
        if (this.dataSourcee.map(p => p.position).includes(result.position)) {
          this.dataSourcee[result.position - 1] = result;
          this.table.renderRows();
        } else {
          this.dataSourcee.push(result);
          this.table.renderRows();
        }
      }
    });
  }

  editElement(element: PeriodicElementy): void {
    this.openDialog(element);
  }

  deleteElement(position: number): void {
    this.dataSourcee = this.dataSourcee.filter(p => p.position !== position);
  }

}



