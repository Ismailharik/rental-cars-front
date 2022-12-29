import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/shop/models/vehicle.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeServices {



  constructor(private httpClient:HttpClient) {     
  }
  
  ngOnInit(): void {

    
  }


  
}
