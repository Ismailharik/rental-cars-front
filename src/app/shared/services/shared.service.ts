import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/shop/models/vehicle.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient:HttpClient) { }

    /*get vehicles with sort latest dates 
    limit on 10 vehicles
  */
    getAllVehiclesWithSort():Observable<Vehicle[]> {
      return this.httpClient.get<Vehicle[]>(environment.host+"/vehicles/paginationAndSort/0/5/dateFirstCirculation");
    }
}
