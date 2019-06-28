import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleaddComponent } from './simpleadd.component';

describe('SimpleaddComponent', () => {
  let component: SimpleaddComponent;
  let fixture: ComponentFixture<SimpleaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
