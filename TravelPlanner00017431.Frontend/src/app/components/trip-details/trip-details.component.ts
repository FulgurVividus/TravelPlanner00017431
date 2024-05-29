import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Trip } from '../../../data/trip';
import { TripService } from '../../services/trip.service';
import { Activity } from '../../../data/activity';
import { CommonModule } from '@angular/common';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [MatChipsModule,MatCardModule, CommonModule, RouterModule],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css'
})
export class TripDetailsComponent { 
  tripDetails:Trip={
    id: 0,
    name: "",
    destination: "",
    startDate: new Date(),
    endDate: null  
  }

  activities: Activity[]=[]
  tripService = inject(TripService)
  actService = inject(ActivityService)
  
  activatedRoute = inject(ActivatedRoute)
  ngOnInit(){
    this.tripService.getById(this.activatedRoute.snapshot.params["id"]).subscribe((resultedItem)=>{
    this.tripDetails=resultedItem  
    });
    this.actService.filterByTrip(this.activatedRoute.snapshot.params["id"]).subscribe((result)=>{
      this.activities = result
    })    
  }
}
