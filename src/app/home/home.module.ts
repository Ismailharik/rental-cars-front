import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { ServicesModule } from '../services/services.module';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        MainHomeComponent,
        OurTeamComponent,
        OurClientsComponent,
        AboutComponent,
    ],
    exports: [
        MainHomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ServicesModule,
        HttpClientModule
    ]
})
export class HomeModule { }
