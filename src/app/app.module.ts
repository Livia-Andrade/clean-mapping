import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Imports 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ElementDialogComponent } from './components/element-dialog/element-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { matDatepickerAnimations, MatDatepickerModule } from '@angular/material/datepicker';

//Componentes Pages

import { BaseComponent } from './pages/base/base.component';
import { LogComponent } from './pages/log/log.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/client/client.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MappingComponent } from './pages/mapping/mapping.component';
import { EmployeeComponent } from './pages/mapping/employee/employee.component';
import { EmployeeService} from './shared/employee.service';



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LogComponent,
    HomeComponent,
    ClientComponent,
    LayoutComponent,
    ElementDialogComponent,
    MappingComponent,
    EmployeeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule, 
    MatSlideToggleModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,

    //import do sidebar
    MatToolbarModule,
    FormsModule 
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
