import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleServices {
  constructor(private httpClient:HttpClient) { }
  
  getAllVehiclesWithPagination(offset: number,pageSize:number):Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(environment.host+"/vehicles/pagination/"+offset+"/"+pageSize);
  }

  getAllVehicles():Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(environment.host+"/vehicles");
  }


}
