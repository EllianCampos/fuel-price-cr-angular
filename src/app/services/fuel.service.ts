import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FuelResponse } from '../interfaces/fuel-response';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FuelService {
  private apiUrl = 'https://api.recope.go.cr/ventas/precio/consumidor';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<FuelResponse[]>(this.apiUrl);
  }
}
