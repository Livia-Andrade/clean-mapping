import { jsPDF } from 'jspdf';
import { Component, OnInit, ChangeDetectorRef,ElementRef,ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss']
})



export class ContextComponent implements OnInit {

  public events: any[];
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left : 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },



    initialView: 'dayGridMonth',

    initialEvents: INITIAL_EVENTS, // alternativamente, use a configuração 'eventos' para buscar de um feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,



    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),

    /* atualizando banco de dados remoto com estes:
    eventAdd:
    eventChange:
    eventRemove:
    */

  };

  currentEvents: EventApi[] = [];
  // events: ({ title: string; start: number; description: string; end?: undefined; } | { title: string; start: Date; description: string; end?: undefined; } | { title: string; start: Date; end: Date; description: string; })[];

  constructor(private changeDetector: ChangeDetectorRef, public dialog: MatDialog) {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModelComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;

  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Insira o nome do evento que deseja adicionar');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // limpar seleção de data

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title: createEventId(),
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Você tem certeza que deseja deletar este evento '${clickInfo.event.title}' ?`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }

  ngOnInit() {
  this.events = [
    {
      title: "Evento 1",
      start: new Date().getTime(),
      description: "evento 1"
    },
    {
      title: "Evento 2",
      start: new Date(new Date().getTime() + 86400000),
      description: "evento 2"
    },
    {
      title: "Evento 3",
      start: new Date(new Date().getTime() + (86400000 * 2)),
      end: new Date(new Date().getTime() + (86400000 * 3)),
      description: "evento 2"
    },
  ]
  }

  // PDF

  @ViewChild ('content', {static: false}) el: ElementRef;

  printSimplePDF() {
    const doc = new jsPDF();
    doc.text("A implementar!", 10, 10);
    doc.save("Grade.pdf");
  }

  printPDF(){
    let pdf = new jsPDF ( 'p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("testePDFHTML.pdf");
      }
    })
  }
}



