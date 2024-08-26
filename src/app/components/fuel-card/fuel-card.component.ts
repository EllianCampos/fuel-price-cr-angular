import { Component, Input } from '@angular/core';
import { FuelResponse } from '../../interfaces/fuel-response';
import cardColors from '../../mocks/cardColor';
import { RouterLink } from '@angular/router';
import { FuelCardTitleComponent } from '../fuel-card-title/fuel-card-title.component';
import { FuelCardPriceComponent } from "../fuel-card-price/fuel-card-price.component";

@Component({
  selector: 'app-fuel-card',
  standalone: true, 
  imports: [RouterLink, FuelCardTitleComponent, FuelCardPriceComponent],
  templateUrl: './fuel-card.component.html',
})
export class FuelCardComponent {
  @Input() fuel!: FuelResponse;
  cardColors = cardColors;

  getColor(fuelId: string) {
    return this.cardColors.get(fuelId);
  }

  navigateTo(fuelName: string) {
    console.log('click')
  }
}
