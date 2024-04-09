import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTiketComponent } from './datos-tiket.component';

describe('DatosTiketComponent', () => {
  let component: DatosTiketComponent;
  let fixture: ComponentFixture<DatosTiketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatosTiketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosTiketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
