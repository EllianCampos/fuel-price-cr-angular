import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FuelComponent } from './pages/fuel/fuel.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Precio del Combustible CR',
  },
  {
    path: 'fuel/:fuelName',
    component: FuelComponent,
    title: 'Precio del Combustible CR',
  },
];
