import { MatDialog } from '@angular/material/dialog';
import { ElementDialogComponent } from './../../components/element-dialog/element-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
  symbol: string;
  password: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Kleber', description: 'Professor', symbol: 'Backend', password: '123' },
  { position: 2, name: 'João', description: 'Professor', symbol: 'Banco de dados', password: '123' },
  { position: 3, name: 'Ronaldo', description: 'Professor', symbol: 'Frontend', password: '123' },
  { position: 4, name: 'Airton', description: 'Professor', symbol: 'Sistemas Operacionais', password: '123' },
];


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'description', 'symbol', 'password', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(element: PeriodicElement | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element == null ? {
        position: null,
        name: '',
        description: null,
        symbol: ''
      } : {
        position: element.position,
        name: element.name,
        description: element.description,
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


