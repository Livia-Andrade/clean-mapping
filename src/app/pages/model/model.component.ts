import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContextComponent } from '../context/context.component';


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContextComponent>){}

  ngOnInit(): void {
    //tamanho modal
    this.dialogRef.updateSize('30%', '30%')
  }


}



