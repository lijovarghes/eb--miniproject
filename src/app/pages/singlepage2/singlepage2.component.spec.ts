import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlepage2Component } from './singlepage2.component';

describe('Singlepage2Component', () => {
  let component: Singlepage2Component;
  let fixture: ComponentFixture<Singlepage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Singlepage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singlepage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
