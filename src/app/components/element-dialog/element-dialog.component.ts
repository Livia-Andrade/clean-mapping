import { Component, OnInit, Inject } from '@angular/core';
import { PeriodicElement } from 'src/app/pages/client/client.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/client.service';

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
    // private router: Router,
    // private route: ActivatedRoute,
    private service: ClientService,
  ) { }

  onAdd(){
    console.log(this.onAdd);
    // this.router.navigate(commands:['new'], extras:{relativeTo: this.route});
  }

  // onSubmit(){
  //   this.service.save(this.form.value);
  // }
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
