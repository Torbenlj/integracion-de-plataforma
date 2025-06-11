import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelControlClienteComponent } from './panel-control-cliente.component';

describe('PanelControlClienteComponent', () => {
  let component: PanelControlClienteComponent;
  let fixture: ComponentFixture<PanelControlClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelControlClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelControlClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
