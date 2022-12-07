import { MatDialog } from '@angular/material/dialog';
import { ElementDialogComponent } from './../../components/element-dialog/element-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ElementDialogMappingComponent } from 'src/app/components/element-dialog-mapping/element-dialog-mapping.component';


export interface PeriodicElement {
  recurso: string;
  position: number;
  name: string;
  number: string;
  symbol: string;
}

//Ambiente, Diciplina, Docente, Equipamento, Turma
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


@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position','recurso', 'name', 'number', 'symbol', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(element: PeriodicElement | null): void {
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

  editElement(element: PeriodicElement): void {
    this.openDialog(element);
  }

  deleteElement(position: number): void {
    this.dataSource = this.dataSource.filter(p => p.position !== position);
  }

}



