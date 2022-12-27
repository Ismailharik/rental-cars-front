import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurShopComponent } from './components/our-shop/our-shop.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { RelatedCarsComponent } from './components/related-cars/related-cars.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BookingCarComponent } from './components/booking-car/booking-car.component';



@NgModule({
  declarations: [
    OurShopComponent,
    CarDetailsComponent,
    RelatedCarsComponent,
    BookingCarComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule 
  ],
  exports:[
  ]
})
export class ShopModule { }
