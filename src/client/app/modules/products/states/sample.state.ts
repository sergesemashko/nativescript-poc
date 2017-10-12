import { Observable } from 'rxjs/Observable';

export interface IProductsState {
  products: Array<string>;
}

export const productInitialState: IProductsState = {
  products: <Array<string>>[]
};

// selects specific slice from sample state
export function getProducts(state$: Observable<IProductsState>) {
  return state$.select(state => state.products);
}
