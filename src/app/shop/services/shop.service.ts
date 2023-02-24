import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';

import { Office } from '../models/office.model';
import { Reservation } from '../models/reservation.model';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleServices {
  getVehicleByOffice(officeId: string):Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(environment.host+"/vehicles/location/"+officeId )
  }


  constructor(private httpClient: HttpClient) { }
  addReservation(reservation: Reservation) {
    return this.httpClient.post<Reservation>(environment.host+"/reservations", reservation)
  }
  getAllVehiclesWithPagination(offset: number, pageSize: number): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(environment.host + "/vehicles/pagination/" + offset + "/" + pageSize);
  }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(environment.host + "/vehicles");
  }
  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(environment.host + "/categories");
  }

  getAllOffices(): Observable<Office[]> {
    return this.httpClient.get<Office[]>(environment.host + "/offices");
  }
  getOfficeById(officeId: number): Observable<Office> {
    return this.httpClient.get<Office>(environment.host + "/offices/" + officeId);
  }
  getAllVehiclesByLocation(officeId: string): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(environment.host + "/vehicles/location/" + officeId);
  }



}
