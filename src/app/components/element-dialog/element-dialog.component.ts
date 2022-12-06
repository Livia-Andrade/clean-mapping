import { Component, OnInit, Inject } from '@angular/core';
import { PeriodicElement } from 'src/app/pages/client/client.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  element!: PeriodicElement;
  isChange! : boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElement,
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
