import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExampleOneComponent } from './components/example-one/example-one.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { ServiceMonitorComponent } from './components/service-monitor/service-monitor.component';


const routes: Routes = [
  
  {path:'', component : ExampleOneComponent},
  { path :'home' , component : HomeComponent },
  {path:'servicemonitor',component:ServiceMonitorComponent},
  {path:'**' , component : ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
