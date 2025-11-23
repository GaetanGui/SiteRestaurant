export interface Dish {
  dishId: number;
  name: string;        // <-- REMPLACE 'key'
  description: string;
  price: number;
  imageUrl: string;
  categoryId: number;
}