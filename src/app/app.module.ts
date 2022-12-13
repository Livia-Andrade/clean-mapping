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
import { CommonModule } from '@angular/common';
// import { FlatpickrModule } from 'angularx-flatpickr';
// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

//Componentes Pages

import { BaseComponent } from './pages/base/base.component';
import { LogComponent } from './pages/log/log.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/client/client.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MappingComponent } from './pages/mapping/mapping.component';
import { ElementDialogMappingComponent } from './components/element-dialog-mapping/element-dialog-mapping.component';
// import { ContextComponent } from './pages/context/context.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationMappingComponent } from './components/navigation-mapping/navigation-mapping.component';





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
    // ContextComponent,
    NavigationComponent,
    NavigationMappingComponent,
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

    //import calendar
    // CommonModule,
    // FormsModule,
    // NgbModalModule,
    // FlatpickrModule.forRoot(),
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory,
    // }),

    //import sidebar
    MatToolbarModule,
    FormsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
