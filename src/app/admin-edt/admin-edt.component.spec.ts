import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEdtComponent } from './admin-edt.component';

describe('AdminEdtComponent', () => {
  let component: AdminEdtComponent;
  let fixture: ComponentFixture<AdminEdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEdtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
