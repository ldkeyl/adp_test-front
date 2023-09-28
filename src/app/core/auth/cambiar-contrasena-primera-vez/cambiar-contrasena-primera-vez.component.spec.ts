import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarContrasenaPrimeraVezComponent } from './cambiar-contrasena-primera-vez.component';

describe('CambiarContrasenaPrimeraVezComponent', () => {
  let component: CambiarContrasenaPrimeraVezComponent;
  let fixture: ComponentFixture<CambiarContrasenaPrimeraVezComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CambiarContrasenaPrimeraVezComponent]
    });
    fixture = TestBed.createComponent(CambiarContrasenaPrimeraVezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
