import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fuel-card-title',
  standalone: true,
  imports: [],
  templateUrl: './fuel-card-title.component.html',
})
export class FuelCardTitleComponent {
  @Input() title = ''
}
