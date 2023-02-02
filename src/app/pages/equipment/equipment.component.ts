import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ElementDialogMappingComponent } from 'src/app/components/element-dialog-mapping/element-dialog-mapping.component';
import { DialogoConfirmacaoComponent } from 'src/app/components/dialogo-confirmacao/dialogo-confirmacao.component';
import { PeriodicElementEquipmentService } from 'src/app/services/periodic-element-equipment.service';

export interface PeriodicElementEquipment {
  recurso: string;
  position: number;
  name: string;
  number: string;
  symbol: string;
}

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'recurso', 'name', 'number', 'symbol', 'action'];
  dataSource!: PeriodicElementEquipment[];

  openDelete(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogoConfirmacaoComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  constructor(public dialog: MatDialog, private periodicElementEquipmentService: PeriodicElementEquipmentService) { 
    this.periodicElementEquipmentService.getElements().subscribe((data: PeriodicElementEquipment[]) => {
      this.dataSource  = data;
    });
  }

  ngOnInit(): void {
  }

  openDialog(element: PeriodicElementEquipment | null): void {
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

  editElement(element: PeriodicElementEquipment): void {
    this.openDialog(element);
  }

  deleteElement(position: number): void {
    this.dataSource = this.dataSource.filter(p => p.position !== position);
  }

}
