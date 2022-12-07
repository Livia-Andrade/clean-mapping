import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MappingComponent } from '../mapping/mapping.component';
import { ClientComponent } from '../client/client.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
