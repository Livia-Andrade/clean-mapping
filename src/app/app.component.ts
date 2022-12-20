import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clean Mapping';
  sideBarOpen = true;

  constructor(public router: Router){}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
