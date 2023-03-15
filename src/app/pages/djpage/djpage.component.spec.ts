import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjpageComponent } from './djpage.component';

describe('DjpageComponent', () => {
  let component: DjpageComponent;
  let fixture: ComponentFixture<DjpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
