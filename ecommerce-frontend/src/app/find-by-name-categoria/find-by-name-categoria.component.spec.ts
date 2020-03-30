import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByNameCategoriaComponent } from './find-by-name-categoria.component';

describe('FindByNameCategoriaComponent', () => {
  let component: FindByNameCategoriaComponent;
  let fixture: ComponentFixture<FindByNameCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByNameCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByNameCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
