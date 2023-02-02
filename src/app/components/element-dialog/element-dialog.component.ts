import { Component, OnInit, Inject } from '@angular/core';
import { Client } from 'src/app/services/api-models/client';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  element!: Client;
  isChange! : boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Client,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) { }


  ngOnInit(): void {
    if(this.data.position != null) {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
    this.dialogRef.updateSize('50%', '57%');
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
