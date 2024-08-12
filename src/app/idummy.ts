import { Products } from './products';

export interface IDummy {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}
