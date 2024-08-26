import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FuelService } from '../../services/fuel.service';
import { FuelResponse } from '../../interfaces/fuel-response';
import { FuelCardTitleComponent } from '../../components/fuel-card-title/fuel-card-title.component';
import { FuelCardPriceComponent } from "../../components/fuel-card-price/fuel-card-price.component";

@Component({
  selector: 'app-fuel',
  standalone: true,
  imports: [RouterModule, FuelCardTitleComponent, FuelCardPriceComponent],
  templateUrl: './fuel.component.html',
  styleUrl: './fuel.component.css'
})
export class FuelComponent {
  route = inject(ActivatedRoute)
  fuelService = inject(FuelService)
  fuelData!:FuelResponse | undefined

  constructor() {
    const fuelName = this.route.snapshot.params['fuelName']
    this.fuelService.getData().subscribe(data => this.fuelData = data.find(x => x.nomprod === fuelName))
  }
}
