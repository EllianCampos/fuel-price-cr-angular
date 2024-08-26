import { Component, inject } from '@angular/core';
import { FuelService } from '../../services/fuel.service';
import { FuelResponse } from '../../interfaces/fuel-response';
import { FuelListComponent } from '../../components/fuel-list/fuel-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FuelListComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  fuelService = inject(FuelService)
  data: FuelResponse[]  | undefined = []

  constructor() {
    this.fuelService.getData().subscribe(data => this.data = data)
  }
}
