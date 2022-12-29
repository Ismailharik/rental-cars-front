import { Category } from "./category.model"

export interface Vehicle{
    id: number,
    title: string,
    description: string,
    dailyPrice: number,
    dateFirstCirculation: Date,
    nbrOfKm:number,
    available:boolean,
    images:[],
    promo:Object,
    officeId:number
    category:Category
}
