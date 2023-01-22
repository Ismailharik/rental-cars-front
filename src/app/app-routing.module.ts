import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OurContactsComponent } from "./contact/components/our-contacts/our-contacts.component";
import { AboutComponent } from "./home/components/about/about.component";
import { MainHomeComponent } from "./home/components/main-home/main-home.component";
import { OurServicesComponent } from "./services/components/our-services/our-services.component";
import { CarDetailsComponent } from "./shop/components/car-details/car-details.component";
import { OurShopComponent } from "./shop/components/our-shop/our-shop.component";


const routes: Routes = [
    {path:'home',component:MainHomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:OurContactsComponent},
    {path:'services',component:OurServicesComponent},
    {path:'shop',component:OurShopComponent},
    {path:'shop/car-details',component:CarDetailsComponent},
    {path:'**',redirectTo:"home",pathMatch:"full"},

];
    
@NgModule({
    imports:[RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
    exports:[RouterModule]
})
export class AppRoutingModule { }