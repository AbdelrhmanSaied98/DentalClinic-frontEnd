import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProcdureComponent } from './add-procdure/add-procdure.component';
import { AppointmentComponentComponent } from './appointment-component/appointment-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { ProcdureComponentComponent } from './procdure-component/procdure-component.component';
import { SchedularComponentComponent } from './schedular-component/schedular-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { VisitComponentComponent } from './visit-component/visit-component.component';

const routes: Routes = [
  { path:'', component:AppointmentComponentComponent},
  { path:'schedule', component:SchedularComponentComponent},
  { path:'signup', component:SignupComponentComponent},
  { path:'main', component:MainComponentComponent},
  { path:'visit', component:VisitComponentComponent},
  { path:'procedure', component:ProcdureComponentComponent},
  { path:'addProcedure', component:AddProcdureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
