import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MianLayoutComponent } from './mian-layout.component';

describe('MianLayoutComponent', () => {
  let component: MianLayoutComponent;
  let fixture: ComponentFixture<MianLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MianLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MianLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
