import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Activity } from '../../data/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  httpClient = inject(HttpClient)
  constructor() { }

  getAll(){
    return this.httpClient.get<Activity[]>("http://localhost:5218/api/Activities/Get")
  }

  filterByTrip(tripId:number){
    return this.httpClient.get<Activity[]>("http://localhost:5218/api/Activities/FilterByTrip/"+tripId)
  }

  getById(id:number){
    return this.httpClient.get<Activity>("http://localhost:5218/api/Activities/GetById/"+id)
  }

  create(item:Activity){
    return this.httpClient.post<Activity>("http://localhost:5218/api/Activities/Create", item)
  }

  delete(id:number){
    return this.httpClient.delete("http://localhost:5218/api/Activities/Delete/"+id)
  }
}
