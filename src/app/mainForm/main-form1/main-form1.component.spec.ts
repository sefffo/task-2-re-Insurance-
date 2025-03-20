import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainForm1Component } from './main-form1.component';

describe('MainForm1Component', () => {
  let component: MainForm1Component;
  let fixture: ComponentFixture<MainForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainForm1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
