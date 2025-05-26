import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopartDetailComponent } from './autopart-detail.component';

describe('AutopartDetailComponent', () => {
  let component: AutopartDetailComponent;
  let fixture: ComponentFixture<AutopartDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutopartDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutopartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
