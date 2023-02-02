import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import Pages

import { BaseComponent } from './pages/base/base.component';
import { LogComponent } from './pages/log/log.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/client/client.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MappingComponent } from './pages/mapping/mapping.component';
import { ElementDialogMappingComponent } from './components/element-dialog-mapping/element-dialog-mapping.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CommandComponent } from './components/command/command.component';
import { ContextComponent } from './pages/context/context.component';

//Imports
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ElementDialogComponent } from './components/element-dialog/element-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { matTooltipAnimations, MatTooltipModule } from '@angular/material/tooltip';


//import for calendar
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModelComponent } from './pages/model/model.component';


//import SIDEBAR
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';


//import HEADER
import { MatMenuModule} from '@angular/material/menu';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { DialogoConfirmacaoComponent } from './components/dialogo-confirmacao/dialogo-confirmacao.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { PeriodicElementService } from './services/periodic-element.service';
import { HttpClientModule } from '@angular/common/http';
import { PeriodicElementMappingService } from './services/periodic-element-mapping.service';
import { EnvironmentComponent } from './pages/environment/environment.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { ClassComponent } from './pages/class/class.component';
import { PeriodicElementTeacherService } from './services/periodic-element-teacher.service';
import { PeriodicElementClassService } from './services/periodic-element-class.service';
import { PeriodicElementEquipmentService } from './services/periodic-element-equipment.service';
import { PeriodicElementEnvironmentService } from './services/periodic-element-environment.service';


// import { DialogAnimationsComponent } from './mapping/dialog-animations/dialog-animations.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LogComponent,
    HomeComponent,
    ClientComponent,
    ElementDialogComponent,
    MappingComponent,
    ElementDialogMappingComponent,
    LayoutComponent,
    CommandComponent,
    ContextComponent,
    HomeUserComponent,
    DialogoConfirmacaoComponent,
    PdfComponent,
    ModelComponent,
    EnvironmentComponent,
    TeacherComponent,
    EquipmentComponent,
    ClassComponent,
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
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule,
    HttpClientModule,


    //import SIDEBAR
    MatToolbarModule,
    FormsModule,
    LayoutModule,
    MatDividerModule,

    //import HEADER
    MatMenuModule,

    //import CALENDAR
    FullCalendarModule,
  ],
  providers: [PeriodicElementService, PeriodicElementMappingService, PeriodicElementTeacherService, PeriodicElementClassService, PeriodicElementEquipmentService, PeriodicElementEnvironmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
