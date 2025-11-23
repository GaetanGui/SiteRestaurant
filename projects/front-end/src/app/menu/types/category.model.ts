import { Dish } from "./dish.model";

export interface Category {
  categoryId: number;
  name: string;   
  displayOrder: number;
  dishes: Dish[];   
}