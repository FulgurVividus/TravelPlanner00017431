import { Component, inject } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-create-trip',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
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
    startDate: new Date(),
    endDate: null
  }

  create() {
    this.tripService.create(this.createTrip).subscribe(result => {
      alert("A trip was created successfully")
      this.router.navigateByUrl("")
    });
  };
}
