import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCityBodyComponent } from './admin-city-body.component';

describe('AdminCityBodyComponent', () => {
  let component: AdminCityBodyComponent;
  let fixture: ComponentFixture<AdminCityBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCityBodyComponent]
    });
    fixture = TestBed.createComponent(AdminCityBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
