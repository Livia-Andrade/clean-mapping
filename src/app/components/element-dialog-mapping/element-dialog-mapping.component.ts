import { Component, Inject, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/pages/mapping/mapping.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ElementDialogComponent } from '../element-dialog/element-dialog.component';

@Component({
  selector: 'app-element-dialog-mapping',
  templateUrl: './element-dialog-mapping.component.html',
  styleUrls: ['./element-dialog-mapping.component.scss']
})
export class ElementDialogMappingComponent implements OnInit {
  element!: PeriodicElement;
  isChange!: boolean;
  selected = 'option2';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) { }

  ngOnInit(): void {
    if (this.data.position != null) {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
    this.dialogRef.updateSize('50%', '55%');
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
