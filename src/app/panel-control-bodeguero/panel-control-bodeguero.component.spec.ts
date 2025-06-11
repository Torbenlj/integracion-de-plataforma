import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelControlBodegueroComponent } from './panel-control-bodeguero.component';

describe('PanelControlBodegueroComponent', () => {
  let component: PanelControlBodegueroComponent;
  let fixture: ComponentFixture<PanelControlBodegueroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelControlBodegueroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelControlBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
