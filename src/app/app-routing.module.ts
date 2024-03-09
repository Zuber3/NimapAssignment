import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path : "home", component: HomeComponent},
{path: "Registration", component:RegistrationComponent },
{ path:"User-Profile", component: UserProfileComponent},
{ path: '', redirectTo: '/Registration', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = [HomeComponent,RegistrationComponent,UserProfileComponent];

