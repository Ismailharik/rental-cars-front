import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurBrandsComponent } from './components/our-brands/our-brands.component';



@NgModule({
  declarations: [
    OurServicesComponent,
    OurBrandsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    OurServicesComponent
  ]
})
export class ServicesModule { }
