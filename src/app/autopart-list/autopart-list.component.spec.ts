import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopartListComponent } from './autopart-list.component';

describe('AutopartListComponent', () => {
  let component: AutopartListComponent;
  let fixture: ComponentFixture<AutopartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutopartListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutopartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});