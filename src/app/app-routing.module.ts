import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './pages/base/base.component';
import { LogComponent } from './pages/log/log.component';

const routes: Routes = [
  { path: 'base', component : BaseComponent},
  { path: 'log',  component  : LogComponent},
  { path: 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
