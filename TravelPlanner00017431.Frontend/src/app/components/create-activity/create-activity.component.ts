import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { TripService } from '../../services/trip.service';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../../data/activity';

@Component({
  selector: 'app-create-activity',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatDatepickerModule],
  providers: [provideMomentDateAdapter(undefined, {useUtc: true})],
  templateUrl: './create-activity.component.html',
  styleUrl: './create-activity.component.css'
})
export class CreateActivityComponent {
  router = inject(Router)
  tripService = inject(TripService)
  actService = inject(ActivityService)

  createActivity:Activity={
    id: 0,
    title: "",
    date: new Date(),
    estimatedCost: 0,
    location: "",
    tripId: 0,
    trip: null  
  }
  
  trips: any;
  tripId: number = 0;


  ngOnInit() {
    this.tripService.getAll().subscribe((result) => {
      this.trips = result
    })
  }

  create() {
    this.createActivity.tripId=this.tripId
    this.actService.create(this.createActivity).subscribe(result => {
      alert("An activity was created successfully")
      this.router.navigateByUrl("")
    });
  };
}
