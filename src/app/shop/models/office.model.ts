import { Vehicle } from "./vehicle.model"

export interface Office{
    id:number
    city:string
    phone:string
    address:string
    vehicles:Vehicle[]

}
