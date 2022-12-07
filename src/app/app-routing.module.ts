import { MappingComponent } from './pages/mapping/mapping.component';
import { ClientComponent } from './pages/client/client.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './pages/base/base.component';
import { LogComponent } from './pages/log/log.component';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  { path: 'base', component: BaseComponent },
  { path: 'log', component: LogComponent },
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ClientComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'mapping', component: MappingComponent},

  // { path: '', Component: LogoutComponent},  --> CRIA COMPONENT LOGOUT

  

  // { path: '**', component: ErrorComponent }, --> CRIA COMPONENT ERRO
  // Lembre-se de deixar o scape da rota sempre como último
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
