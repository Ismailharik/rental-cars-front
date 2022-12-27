import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderCarouselComponent } from './components/header-carousel/header-carousel.component';
import { OurBrandsComponent } from './components/our-brands/our-brands.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeaderCarouselComponent,
    OurBrandsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  exports:[  
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FooterComponent,
    HeaderComponent,
    OurBrandsComponent
  ]
})
export class SharedModule { }
