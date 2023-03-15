import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlepage1Component } from './singlepage1.component';

describe('Singlepage1Component', () => {
  let component: Singlepage1Component;
  let fixture: ComponentFixture<Singlepage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Singlepage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singlepage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
