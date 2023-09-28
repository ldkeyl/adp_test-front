import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRequestComponent } from './modal-request.component';

describe('ModalRequestComponent', () => {
  let component: ModalRequestComponent;
  let fixture: ComponentFixture<ModalRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRequestComponent]
    });
    fixture = TestBed.createComponent(ModalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
