import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkitkComponent } from './dangkitk.component';

describe('DangkitkComponent', () => {
  let component: DangkitkComponent;
  let fixture: ComponentFixture<DangkitkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangkitkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkitkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
