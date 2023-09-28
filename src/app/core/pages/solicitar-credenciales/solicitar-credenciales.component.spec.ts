import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarCredencialesComponent } from './solicitar-credenciales.component';

describe('SolicitarCredencialesComponent', () => {
  let component: SolicitarCredencialesComponent;
  let fixture: ComponentFixture<SolicitarCredencialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitarCredencialesComponent]
    });
    fixture = TestBed.createComponent(SolicitarCredencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
