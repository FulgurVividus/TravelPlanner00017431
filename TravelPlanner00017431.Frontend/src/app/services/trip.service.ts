import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Trip } from '../../data/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  httpClient = inject(HttpClient)
  constructor() { }

  getAll(){
    return this.httpClient.get<Trip[]>("http://localhost:5218/api/Trips")
  }

  getById(id:number){
    return this.httpClient.get<Trip>("http://localhost:5218/api/Trips/"+id)
  }

  edit(item:Trip){
    return this.httpClient.put("http://localhost:5218/api/Trips", item)
  }

  create(item:Trip){
    return this.httpClient.post<Trip>("http://localhost:5218/api/Trips", item)
  }

  delete(id:number){
    return this.httpClient.delete("http://localhost:5218/api/Trips/"+id)
  }
}
