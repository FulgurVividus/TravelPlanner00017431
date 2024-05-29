import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Activity } from '../../../data/activity';
import { ActivityService } from '../../services/activity.service';
import { TripService } from '../../services/trip.service';
import { Trip } from '../../../data/trip';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-activity-details',
  standalone: true,
  imports: [MatChipsModule, MatCard, CommonModule, RouterModule],
  templateUrl: './activity-details.component.html',
  styleUrl: './activity-details.component.css'
})
export class ActivityDetailsComponent {
  activityDetails: Activity = {
    id: 0,
    title: "",
    date: new Date(),
    estimatedCost: 0,
    location: "",
    tripId: 0,
    trip: null
  }

  trip: Trip = {
    id: 0,
    name: "",
    destination: "",
    startDate: new Date(),
    endDate: null
  }
  tripService = inject(TripService)
  actService = inject(ActivityService)

  activatedRoute = inject(ActivatedRoute)
  ngOnInit() {
    this.actService.getById(this.activatedRoute.snapshot.params["id"]).subscribe((resultedItem) => {
      this.activityDetails = resultedItem
      this.tripService.getById(this.activityDetails.tripId).subscribe((result) => {
        this.trip = result
      })
    });
  }
}
