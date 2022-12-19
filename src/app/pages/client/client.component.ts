import { MatDialog } from '@angular/material/dialog';
import { ElementDialogComponent } from './../../components/element-dialog/element-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { PeriodicElementService } from 'src/app/services/periodic-element.service';




export interface PeriodicElement {
  idUsuario: number;
  name: string;
  description: string;
  symbol: string;
  password: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { idUsuario: 1, name: 'Kleber', description: 'KGE', symbol: '875.515.590-19', password: '123' },
  { idUsuario: 2, name: 'João', description: 'Juninho', symbol: '179.508.460-03', password: '321' },
  { idUsuario: 3, name: 'Ronaldo', description: 'Vaqueli', symbol: '644.956.400-89', password: '456' },
  { idUsuario: 4, name: 'Airton', description: 'Zambotti', symbol: '336.539.740-03', password: '789' },
  { idUsuario: 5, name: 'Kaylane', description: 'Coelho', symbol: '875.515.590-19', password: '123' },
  { idUsuario: 6, name: 'Livia', description: 'Andrade', symbol: '179.508.460-03', password: '321' },
  { idUsuario: 7, name: 'Kailaine', description: 'Naiara', symbol: '644.956.400-89', password: '456' },
  { idUsuario: 8, name: 'Renan', description: 'Mesquita', symbol: '336.539.740-03', password: '789' },
  { idUsuario: 9, name: 'Julia', description: 'Julinha', symbol: '644.956.400-89', password: '456' },
  { idUsuario: 10, name: 'Leandro', description: 'Leandrinho', symbol: '336.539.740-03', password: '789' },
];


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  providers: [PeriodicElementService]
})
export class ClientComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['idUsuario', 'name', 'description', 'symbol', 'password', 'action'];
  // dataSource = ELEMENT_DATA;
  dataSource!: PeriodicElement[];


  constructor(public dialog: MatDialog, private periodicElementService: PeriodicElementService) { 
    this.periodicElementService.getElements().subscribe((data: PeriodicElement[]) => {
      this.dataSource  = data;
    });
  }

  ngOnInit(): void {
  }

  // VINCULANDO ELEMENT DIALOG

  openDialog(element: PeriodicElement | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element == null ? {
        idUsuario: null,
        name: '',
        description: null,
        symbol: '',
        password: ''
      } : {
        idUsuario: element.idUsuario,
        name: element.name,
        description: element.description,
        symbol: element.symbol,
        password: element.password
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) { console.log(result);
        if (this.dataSource.map(p => p.idUsuario).includes(result.idUsuario)) {
          this.periodicElementService.editElement(result)
            .subscribe((data: PeriodicElement) => {
              const index = this.dataSource.findIndex(p => p.idUsuario === data.idUsuario);
              this.dataSource[index] = data;
              this.table.renderRows();
            });
        } else {
          this.periodicElementService.createElements(result)
            .subscribe((data: PeriodicElement) => {
              this.dataSource.push(data);
              this.table.renderRows();
            });
        }
      }
    });
  }

  editElement(element: PeriodicElement): void {
    this.openDialog(element);
  }

  // EDITANDO BOTÃO DE DELETE
  deleteElement(idUsuario: number): void {
    this.dataSource = this.dataSource.filter(p => p.idUsuario !== idUsuario);
  }

}


