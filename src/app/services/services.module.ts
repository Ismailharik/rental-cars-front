import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from './components/our-services/our-services.component';



@NgModule({
  declarations: [
    OurServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    OurServicesComponent
  ]
})
export class ServicesModule { }
