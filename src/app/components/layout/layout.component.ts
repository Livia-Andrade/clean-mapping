import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title = 'Sidebar';
  opened=false;

  constructor() { }

  ngOnInit(): void {
  }

}
