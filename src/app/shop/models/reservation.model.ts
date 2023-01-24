import { Customer } from "./user.model";

export interface Reservation{
    customer:Customer,
    duration:number,
    pickUpDate:Date,
    officeId:number,
    vehicleId:number
}