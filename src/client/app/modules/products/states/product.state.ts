import { Observable } from 'rxjs/Observable';

export interface IProduct {
  sku: string;
  name: string;
  mediumImage: string;
  regularPrice: number;
}

export interface IProductsState {
  products: Array<IProduct>;
  searchQuery: string;
}

export const productInitialState: IProductsState = {
  searchQuery: <string>'',
  products: <Array<IProduct>>[]
};

// selects specific slice from sample state
export function getProducts(state$: Observable<IProductsState>) {
  console.log(state$);
  return state$.select(state => state.products);
}
