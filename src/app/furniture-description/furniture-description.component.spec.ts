import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureDescriptionComponent } from './furniture-description.component';

describe('FurnitureDescriptionComponent', () => {
  let component: FurnitureDescriptionComponent;
  let fixture: ComponentFixture<FurnitureDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
