import { Trip } from "./trip";

export interface Activity {
    id: number;
    title: string;
    date: Date;
    estimatedCost: number;
    location: string;
    tripId: number;
    trip: Trip | null
  }