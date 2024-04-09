import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTiketComponent } from './buscar-tiket.component';

describe('BuscarTiketComponent', () => {
  let component: BuscarTiketComponent;
  let fixture: ComponentFixture<BuscarTiketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarTiketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarTiketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
