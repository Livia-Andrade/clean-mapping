import { MatDialog } from '@angular/material/dialog';
import { ElementDialogComponent } from './../../components/element-dialog/element-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ElementDialogMappingComponent } from 'src/app/components/element-dialog-mapping/element-dialog-mapping.component';


export interface PeriodicElement {
  position: number;
  name: string;
  number: string;
  symbol: string;
}

//Ambiente, Diciplina, Docente, Equipamento, Turma
//ID, NOME, NÚMERO, OBSERVAÇÃO 

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { position: 2, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { position: 3, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { position: 4, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { position: 5, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { position: 6, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { position: 7, name: 'Maquina', number: '9', symbol: 'Funcionando' },
  { position: 8, name: 'Maquina', number: '9', symbol: 'Funcionando' },
];


@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'number', 'symbol', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(element: PeriodicElement | null): void {
    const dialogRef = this.dialog.open(ElementDialogMappingComponent, {
      width: '250px',
      data: element == null ? {
        position: null,
        name: '',
        number: null,
        symbol: ''
      } : {
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



