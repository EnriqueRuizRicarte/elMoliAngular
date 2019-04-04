import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaListComponent } from './galeria-list.component';

describe('GaleriaListComponent', () => {
  let component: GaleriaListComponent;
  let fixture: ComponentFixture<GaleriaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
