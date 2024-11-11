import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiURL :string = "https://projectapi.gerasim.in/api/BusBooking/"

  constructor(private http :HttpClient) { }

  getLocation(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + "GetBusLocations");
  }

  searchBus(fromLocation: number, toLocation: number, travelingDate: string):Observable<any[]>{
    return this.http.get<any[]>(this.apiURL+ `searchBus?fromLocation=${fromLocation}&toLocation=${toLocation}&travelDate=${travelingDate}`)
  }


}
