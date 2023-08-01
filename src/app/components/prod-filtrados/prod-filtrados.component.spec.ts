import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFiltradosComponent } from './prod-filtrados.component';

describe('ProdFiltradosComponent', () => {
  let component: ProdFiltradosComponent;
  let fixture: ComponentFixture<ProdFiltradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFiltradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdFiltradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
