import { Routes } from '@angular/router';
import path from 'node:path';
import {SearchComponent} from './Pages/search/search.component';
import {BookingComponent} from './Pages/booking/booking.component';

export const routes: Routes = [
  {
    path:"",
    redirectTo:"search",
    pathMatch:"full"
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"Booking",
    component:BookingComponent
  }
];
