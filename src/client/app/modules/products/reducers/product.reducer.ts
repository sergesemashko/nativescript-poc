import { IProductsState, productInitialState } from '../states/index';
import { ProductList } from '../actions/index';

export function reducer(
  state: IProductsState = productInitialState,
  // could support multiple state actions via union type here
  // ie: NameList.Actions | Other.Actions
  // the seed's example just has one set of actions: NameList.Actions
  action: ProductList.Actions
): IProductsState {
  switch (action.type) {
    case ProductList.ActionTypes.SEARCH_SUCESS:
      return (<any>Object).assign({}, state, {
        products: action.payload
      });
    case ProductList.ActionTypes.SEARCH:
      return (<any>Object).assign({}, state, {
        searchQuery: action.payload
      });

    default:
      return state;
  }
}
