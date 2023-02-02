import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogMappingComponent } from './element-dialog-mapping.component';

describe('ElementDialogMappingComponent', () => {
  let component: ElementDialogMappingComponent;
  let fixture: ComponentFixture<ElementDialogMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDialogMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementDialogMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
