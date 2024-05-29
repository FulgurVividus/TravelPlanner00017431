import { Component, inject } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { Router } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
// moment is used to handle errors that I got while using default dateAdapter
// https://material.angular.io/components/datepicker/overview#choosing-a-date-implementation-and-date-format-settings
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import moment from 'moment';


@Component({
  selector: 'app-create-trip',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatDatepickerModule],
  providers: [provideMomentDateAdapter(undefined, {useUtc: true})],
  templateUrl: './create-trip.component.html',
  styleUrl: './create-trip.component.css'
})
export class CreateTripComponent {
  router = inject(Router)
  tripService = inject(TripService)

  createTrip: any = {
    id: 0,
    name: "",
    destination: "",
    startDate: new FormControl(moment()),
    endDate: null
  }

  create() {
    this.tripService.create(this.createTrip).subscribe(result => {
      alert("A trip was created successfully")
      this.router.navigateByUrl("")
    });
  };
}
