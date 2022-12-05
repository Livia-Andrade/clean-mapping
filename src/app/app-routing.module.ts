import { ClientComponent } from './pages/client/client.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './pages/base/base.component';
import { LogComponent } from './pages/log/log.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MappingComponent } from './pages/mapping/mapping.component';
import { EmployeeComponent } from './pages/mapping/employee/employee.component';
import { ItemListarComponent } from './pages/item/item-listar/item-listar/item-listar.component';

const routes: Routes = [
  { path: 'base', component: BaseComponent },
  { path: 'log', component: LogComponent },
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ClientComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'mapping', component: MappingComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'item', component: ItemListarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
