import { Component, Input } from '@angular/core';
import { FuelResponse } from '../../interfaces/fuel-response';
import { FuelCardComponent } from '../fuel-card/fuel-card.component';

@Component({
  selector: 'app-fuel-list',
  standalone: true,
  imports: [FuelCardComponent],
  templateUrl: './fuel-list.component.html',
})
export class FuelListComponent {
  @Input() data!:FuelResponse[] | undefined
}
