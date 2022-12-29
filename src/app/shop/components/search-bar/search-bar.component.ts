import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Office } from '../../models/office.model';
import { VehicleServices } from '../../services/shop.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  offices!: Office[]
  @Output() locationId = new EventEmitter<string>();
  constructor(private vehicleServices: VehicleServices) { }

  ngOnInit(): void {
    this.getAllOffices();
  }

  getAllOffices() {
    {
      this.vehicleServices.getAllOffices().subscribe({
        next: (resp: any) => {
          //this.offices=resp;
          this.offices = resp._embedded.offices;
          //console.log(resp._embedded.offices);
        },
        error: err => {
          console.log(err);
        }
      })

    }
  }
  onSelected(selectedItem:string){
    this.locationId.emit(selectedItem)
  }
}
