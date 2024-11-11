import {Component, inject, OnInit} from '@angular/core';
import {MasterService} from '../../services/master.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent  implements OnInit {

  searchObj:any = {
      fromLocation : '',
      toLocation : '',
      travelingDate : ''
    }

  location$:Observable<any[]> = new Observable<any[]>;

  mastSer = inject(MasterService)
  busList:any[]= []



  ngOnInit() {
    this.getAllLocation()
  }
  getAllLocation(): void {
    this.location$ = this.mastSer.getLocation(); // Assign observable directly
  }

  onSearch(): void {
    const {fromLocation, toLocation, travelingDate} = this.searchObj;
    const fromLocationNumber = +fromLocation;
    const toLocationNumber = +toLocation;

    this.mastSer.searchBus(fromLocationNumber, toLocationNumber, travelingDate).subscribe((res: any) => {
      this.busList = res;

    });
    if (this.busList){
      console.log("bus is avlable")
    } else {
      console.log("not avlable")
    }
  }

  // protected readonly it = this.it;
}
