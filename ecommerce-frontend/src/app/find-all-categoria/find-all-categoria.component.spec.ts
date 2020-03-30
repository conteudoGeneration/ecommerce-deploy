import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllCategoriaComponent } from './find-all-categoria.component';

describe('FindAllCategoriaComponent', () => {
  let component: FindAllCategoriaComponent;
  let fixture: ComponentFixture<FindAllCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAllCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
