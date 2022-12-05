import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListarComponent } from './item-listar.component';

describe('ItemListarComponent', () => {
  let component: ItemListarComponent;
  let fixture: ComponentFixture<ItemListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
