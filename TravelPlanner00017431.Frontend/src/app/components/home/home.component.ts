import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Trip } from '../../../data/trip';
import { TripService } from '../../services/trip.service';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../../data/activity';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  router = inject(Router)
  tripService = inject(TripService)
  actService = inject(ActivityService)
  trips: Trip[]=[]
  activities: Activity[]=[]

  ngOnInit(){
    this.tripService.getAll().subscribe((result)=>{this.trips = result
    })
    this.actService.getAll().subscribe((result)=> {this.activities = result})
  }

  tableColumns: string[] = ['ID', 'Name', 'Destination', 'Start Date', 'End Date', 'Actions'];
  activityColumns: string[] = ['ID', 'Title', 'Location', 'Date', 'Estimated Cost', 'Actions'];
  
  OnEditClick(itemID:number){
    this.router.navigateByUrl("/updateTrip/"+itemID);
  }

  OnDetailsClick(itemID:number){
    this.router.navigateByUrl("/tripDetails/"+itemID);
  }

  OnDeleteClick(itemId:number){
    this.tripService.delete(itemId).subscribe(() => {
          alert("The trip was deleted. Its ID number: " + itemId);
          location.reload(); // This will refresh the current page
      })}


  OnActivityDetailsClick(itemID:number){
    this.router.navigateByUrl("/activityDetails/"+itemID);
  }

  OnDeleteActivityClick(itemId:number){
    this.actService.delete(itemId).subscribe(() => {
          alert("The activity was deleted. Its ID number: " + itemId);
          location.reload(); // This will refresh the current page
      })}
}