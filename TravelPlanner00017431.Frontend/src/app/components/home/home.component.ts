import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Trip } from '../../../data/trip';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  router = inject(Router)
  tripService = inject(TripService);
  trips: Trip[]=[]; 

  ngOnInit(){
    this.tripService.getAll().subscribe((result)=>{this.trips = result}); 
  }

  tableColumns: string[] = ['ID', 'Name', 'Destination', 'Start Date', 'End Date', 'Actions'];
  
  OnEditClick(itemID:number){
    this.router.navigateByUrl("/editTrip/"+itemID);
  }

  OnDetailsClick(itemID:number){
    this.router.navigateByUrl("/tripDetails/"+itemID);
  }

  OnDeleteClick(itemID:number){
    this.router.navigateByUrl("/deleteTrip/"+itemID);
  }

}
