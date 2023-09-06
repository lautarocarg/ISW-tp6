import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionLocalComponent } from './direccion-local.component';

describe('DireccionLocalComponent', () => {
  let component: DireccionLocalComponent;
  let fixture: ComponentFixture<DireccionLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccionLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
