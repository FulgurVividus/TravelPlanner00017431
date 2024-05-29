import { Component, inject } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from '../../../data/trip';
import { FormsModule } from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-update-trip',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatDatepickerModule],
  providers: [provideMomentDateAdapter(undefined, {useUtc: true})],
  templateUrl: './update-trip.component.html',
  styleUrl: './update-trip.component.css'
})
export class UpdateTripComponent {
  tripService = inject(TripService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  editTrip: Trip = {
    id: 0,
    name: "",
    destination: "",
    startDate: new Date(),
    endDate: null
  }
  
  ngOnInit() {
    this.tripService.getById(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.editTrip = result;
    })
  }

  openMainPage() {
    this.router.navigateByUrl("")
  }

  edit() {
    this.tripService.edit(this.editTrip).subscribe(res=>{
      alert("The information about the trip was changed")
      this.router.navigateByUrl("");
    })
  }
}
