import { TeacherComponent } from './pages/teacher/teacher.component';
import { ClassComponent } from './pages/class/class.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { EnvironmentComponent } from './pages/environment/environment.component';
import { HomeUserComponent } from './pages/home-user/home-user.component';

import { MappingComponent } from './pages/mapping/mapping.component';
import { ClientComponent } from './pages/client/client.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './pages/base/base.component';
import { LogComponent } from './pages/log/log.component';
import { ContextComponent } from './pages/context/context.component';
import { DialogoConfirmacaoComponent } from './components/dialogo-confirmacao/dialogo-confirmacao.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { ModelComponent } from './pages/model/model.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'log'},
  { path: 'base', component: BaseComponent },
  { path: 'log', component: LogComponent },
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ClientComponent },
  { path: 'mapping', component: MappingComponent},
  { path: 'context', component: ContextComponent},
  { path: 'home-user', component: HomeUserComponent},
  { path: 'delete', component: DialogoConfirmacaoComponent},
  { path: 'pdf', component: PdfComponent},
  { path: 'model', component: ModelComponent},
  { path: 'enviroment', component: EnvironmentComponent},
  { path: 'equipment', component: EquipmentComponent},
  { path: 'class', component: ClassComponent},
  { path: 'teacher', component: TeacherComponent}


  // { path: '**', component: ErrorComponent }, --> CRIA COMPONENT ERRO
  // Lembre-se de deixar o scape da rota sempre como último
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
