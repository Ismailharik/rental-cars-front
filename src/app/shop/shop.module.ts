import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurShopComponent } from './components/our-shop/our-shop.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { RelatedCarsComponent } from './components/related-cars/related-cars.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OurShopComponent,
    CarDetailsComponent,
    RelatedCarsComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule ,
    NgbPaginationModule,
    RouterModule,
  ],
  exports:[
  ]
})
export class ShopModule { }
