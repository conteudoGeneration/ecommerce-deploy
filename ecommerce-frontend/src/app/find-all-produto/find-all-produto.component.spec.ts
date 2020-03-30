import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllProdutoComponent } from './find-all-produto.component';

describe('FindAllProdutoComponent', () => {
  let component: FindAllProdutoComponent;
  let fixture: ComponentFixture<FindAllProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAllProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
