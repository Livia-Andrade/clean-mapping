import { MatDialog } from '@angular/material/dialog';
import { ElementDialogComponent } from './../../components/element-dialog/element-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ClientService } from 'src/app/services/client.service';
import { catchError, Observable, of } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
/*import 'rxjs/add/operator/delay';*/


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
// ];


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})

export class ClientComponent implements OnInit {

  PeriodicElement$: Observable<PeriodicElement[]>;
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'description', 'symbol', 'password', 'action'];
  // PeriodicElement = ELEMENT_DATA;
  // clientService: ClientService;

  // spinner
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(private clientService: ClientService, public dialog: MatDialog) {
    // this.clientService = new ClientService();
    this.PeriodicElement$ = this.clientService.listar().pipe(catchError(error => {
      this.onError('Erro ao carregar.');
      return of([]) 
    }));
   }

  ngOnInit(): void {
  }

  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent , {
      data: erroMsg
    });
  }

  onAdd(){
    console.log(this.onAdd);
  }

  openDialog(element: PeriodicElement | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element == null ? {
        position: '',
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

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result != undefined) {
    //     if (this.PeriodicElement.map(p => p.position).includes(result.position)) {
    //       this.PeriodicElement[result.position - 1] = result;
    //       this.table.renderRows();
    //     } else {
    //       this.PeriodicElement.push(result);
    //       this.table.renderRows();
    //     }
    //   }
    // });
  }

  editElement(element: PeriodicElement): void {
    this.openDialog(element);
  }

  // deleteElement(position: number): void {
  //   this.PeriodicElement = this.PeriodicElement.filter(p => p.position !== position);
  // }

}


