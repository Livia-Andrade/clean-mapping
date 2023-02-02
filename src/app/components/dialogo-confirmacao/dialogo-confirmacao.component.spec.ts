import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoConfirmacaoComponent } from './dialogo-confirmacao.component';

describe('DialogoConfirmacaoComponent', () => {
  let component: DialogoConfirmacaoComponent;
  let fixture: ComponentFixture<DialogoConfirmacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoConfirmacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
