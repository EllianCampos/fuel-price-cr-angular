import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelCardPriceComponent } from './fuel-card-price.component';

describe('FuelCardPriceComponent', () => {
  let component: FuelCardPriceComponent;
  let fixture: ComponentFixture<FuelCardPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelCardPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelCardPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
