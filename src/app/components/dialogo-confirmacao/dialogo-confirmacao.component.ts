import { Component, Input, OnInit } from '@angular/core';
import { ClientComponent } from 'src/app/pages/client/client.component';
@Component({
  selector: 'app-dialogo-confirmacao',
  templateUrl: './dialogo-confirmacao.component.html',
  styleUrls: ['./dialogo-confirmacao.component.scss']
})
export class DialogoConfirmacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @Input() position: any;
  // @Input() dataSource: any;
  // @Input() p: any;

  // deleteElement(position: number): void {
  //   this.dataSource = this.dataSource.filter(p => p.position !== position);
  // }


}
