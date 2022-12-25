import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ServicesModule } from './services/services.module';

@NgModule({
    declarations: [
        AppComponent,        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        SharedModule,
        ServicesModule,
        HomeModule,
   
    ],
    exports:[
      
    ]
})
export class AppModule { }
