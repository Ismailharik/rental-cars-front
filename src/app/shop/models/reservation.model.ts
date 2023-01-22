import { User } from "./user.model";

export interface Reservation{
    user:User,
    duration:number,
    location:number,
    pickUpDate:Date,
    vehicleId:number
}