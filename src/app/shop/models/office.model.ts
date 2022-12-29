import { Vehicle } from "./vehicle.model"

export interface Office{
    id:string
    city:string
    phone:string
    address:string
    vehicles:Vehicle[]

}
