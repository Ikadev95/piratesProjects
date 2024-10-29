import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChePirataSeiComponent } from './che-pirata-sei.component';

describe('ChePirataSeiComponent', () => {
  let component: ChePirataSeiComponent;
  let fixture: ComponentFixture<ChePirataSeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChePirataSeiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChePirataSeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
