import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrodetallesComponent } from './librodetalles.component';

describe('LibrodetallesComponent', () => {
  let component: LibrodetallesComponent;
  let fixture: ComponentFixture<LibrodetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrodetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrodetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
