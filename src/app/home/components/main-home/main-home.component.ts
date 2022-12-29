import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/shop/models/vehicle.model';
import { HomeServices } from '../../services/home-services.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  vehicles!:Vehicle[]
  constructor(private homeServices: HomeServices) { }
  ngOnInit(): void {

  }

}
