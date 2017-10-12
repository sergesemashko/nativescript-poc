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
    case ProductList.ActionTypes.INITIALIZED:
      return (<any>Object).assign({}, state, {
        names: action.payload
      });

    default:
      return state;
  }
}
