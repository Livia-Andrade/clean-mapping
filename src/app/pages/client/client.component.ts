import { Client } from './../../services/client';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ElementDialogComponent } from './../../components/element-dialog/element-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogoConfirmacaoComponent } from 'src/app/components/dialogo-confirmacao/dialogo-confirmacao.component';
import { PeriodicElementService } from 'src/app/services/periodic-element.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/*
export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
  symbol: string;
  password: string;
}*/



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']

})

export class ClientComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'description', 'symbol', 'password', 'action'];
  dataSource:  any;
  //dataSource!: PeriodicElement[];
  takedata:any;


  openDelete(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogoConfirmacaoComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor(public dialog: MatDialog, private periodicElementService: PeriodicElementService) {


  }

  GetAll(){
    this.periodicElementService.getElements().subscribe(result => {
      this.takedata = result;

      this.dataSource = new MatTableDataSource<Client>(this.takedata)
      this.dataSource.paginator = this.paginator;

    });

  }

  ngOnInit(): void {
    this.GetAll();
  }

  // VINCULANDO ELEMENT DIALOG

  openDialog(element: Client | null): void {
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
        if (this.dataSource.map((p: { position: any; }) => p.position).includes(result.position)) {
          this.dataSource[result.position - 1] = result;
          this.table.renderRows();
        } else {
          this.dataSource.push(result);
          this.table.renderRows();
        }
      }
    });
  }

  editElement(element: Client): void {
    this.openDialog(element);
  }

  /*
  // EDITANDO BOTÃO DE DELETE
  deleteElement(position: string): void {
    this.dataSource = this.dataSource.filter(p => p.position !== position);
  }*/

  // @Component({
  //   selector: 'app-dialogo-confirmacao',
  //   templateUrl: './dialogo-confirmacao.component.html',
  // })
  // export class DialogoConfirmacaoComponent {
  //   constructor(public dialogRef: MatDialogRef<DialogoConfirmacaoComponent >) {}
  // }


}
