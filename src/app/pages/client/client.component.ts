import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ElementDialogComponent } from './../../components/element-dialog/element-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogoConfirmacaoComponent } from 'src/app/components/dialogo-confirmacao/dialogo-confirmacao.component';
import { PeriodicElementService } from 'src/app/services/periodic-element.service';

export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
  symbol: string;
  password: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Kleber', description: 'KGE', symbol: '875.515.590-19', password: '123' },
//   { position: 2, name: 'João', description: 'Juninho', symbol: '179.508.460-03', password: '321' },
//   { position: 3, name: 'Ronaldo', description: 'Vaqueli', symbol: '644.956.400-89', password: '456' },
//   { position: 4, name: 'Airton', description: 'Zambotti', symbol: '336.539.740-03', password: '789' },
//   { position: 5, name: 'Kaylane', description: 'Coelho', symbol: '875.515.590-19', password: '123' },
//   { position: 6, name: 'Livia', description: 'Andrade', symbol: '179.508.460-03', password: '321' },
//   { position: 7, name: 'Kailaine', description: 'Naiara', symbol: '644.956.400-89', password: '456' },
//   { position: 8, name: 'Renan', description: 'Mesquita', symbol: '336.539.740-03', password: '789' },
//   { position: 9, name: 'Julia', description: 'Julinha', symbol: '644.956.400-89', password: '456' },
//   { position: 10, name: 'Leandro', description: 'Leandrinho', symbol: '336.539.740-03', password: '789' },
// ];


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']

})

export class ClientComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'description', 'symbol', 'password', 'action'];
  // dataSource = ELEMENT_DATA;
  dataSource!: PeriodicElement[];

  openDelete(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogoConfirmacaoComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

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

  // EDITANDO BOTÃO DE DELETE
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


