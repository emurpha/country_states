import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { CountriesComponent } from '../countries/countries.component';
import { HomePageComponent } from '../home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'add', component: CountriesComponent },
  { path: 'home-page', component: HomePageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
