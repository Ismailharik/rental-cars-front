import { Category } from "./category.model"
import { Office } from "./office.model"

export interface Vehicle{
    id: number,
    title: string,
    description: string,
    dailyPrice: number,
    dateFirstCirculation: Date,
    nbrOfKm:number,
    available:boolean,
    model:number,
    franchise:number,
    images:[],
    promo:Object,
    officeId:number,
    category:Category,
    
}
