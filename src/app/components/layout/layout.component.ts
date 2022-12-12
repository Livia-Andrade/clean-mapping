import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title = 'Sidebar';


  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  constructor(private observer: BreakpointObserver) { }

  ngAfterViewInit() {

    this.observer.observe(['(max-width: 1990px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side'
        this.sidenav.open();
      }

    });

  }

  ngOnInit(): void {
  }

}
