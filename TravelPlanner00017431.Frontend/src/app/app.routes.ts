import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateTripComponent } from './components/create-trip/create-trip.component';
import { UpdateTripComponent } from './components/update-trip/update-trip.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"createTrip",
        component:CreateTripComponent
    },
    {
        path:"updateTrip/:id",
        component:UpdateTripComponent
    },
    {
        path:"tripDetails/:id",
        component:TripDetailsComponent
    },
    {
        path:"createActivity",
        component:CreateActivityComponent
    },
    {
        path:"activityDetails/:id",
        component:ActivityDetailsComponent
    }
];
