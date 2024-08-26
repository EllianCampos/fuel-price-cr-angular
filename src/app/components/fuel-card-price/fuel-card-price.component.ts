import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fuel-card-price',
  standalone: true,
  imports: [],
  templateUrl: './fuel-card-price.component.html',
})
export class FuelCardPriceComponent {
  @Input() price = ''
}
