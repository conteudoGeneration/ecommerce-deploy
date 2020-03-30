import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProdutoComponent } from './post-produto.component';

describe('PostProdutoComponent', () => {
  let component: PostProdutoComponent;
  let fixture: ComponentFixture<PostProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
