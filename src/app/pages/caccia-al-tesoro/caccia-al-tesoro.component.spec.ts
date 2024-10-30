import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacciaAlTesoroComponent } from './caccia-al-tesoro.component';

describe('CacciaAlTesoroComponent', () => {
  let component: CacciaAlTesoroComponent;
  let fixture: ComponentFixture<CacciaAlTesoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CacciaAlTesoroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacciaAlTesoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
