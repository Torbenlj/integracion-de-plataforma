import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelControlClienteSkuComponent } from './panel-control-cliente-sku.component';

describe('PanelControlClienteSkuComponent', () => {
  let component: PanelControlClienteSkuComponent;
  let fixture: ComponentFixture<PanelControlClienteSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelControlClienteSkuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelControlClienteSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
