import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  @ViewChild ('content', {static: false}) el: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

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
