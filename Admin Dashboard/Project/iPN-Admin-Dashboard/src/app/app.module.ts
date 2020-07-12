import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ExampleOneComponent } from './components/example-one/example-one.component';
import { ServiceMonitorComponent } from './components/service-monitor/service-monitor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleOneComponent,
    ServiceMonitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
