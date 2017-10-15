import { Action } from '@ngrx/store';
import { type } from '../../core/utils/index';
import {IProduct, IProductsState, productInitialState} from '../states/index';

/**
 * Each action should be namespaced
 * this allows the interior to have similar typed names as other actions
 * however still allow index exports
 */
export namespace ProductList {
  // Category to uniquely identify the actions
  export const CATEGORY: string = 'ProductList';

  /**
   * For each action type in an action group, make a simple
   * enum object for all of this group's action types.
   *
   * The 'type' utility function coerces strings into string
   * literal types and runs a simple check to guarantee all
   * action types in the application are unique.
   */
  export interface IProductListActions {
    SEARCH: string;
    SEARCH_SUCESS: string;
    SEARCH_FAILED: string;
  }

  export const ActionTypes: IProductListActions = {
    SEARCH: type(`${CATEGORY} Search`),
    SEARCH_SUCESS: type(`${CATEGORY} Search Success`),
    SEARCH_FAILED: type(`${CATEGORY} Search Failed`),
  };

  /**
   * Every action is comprised of at least a type and an optional
   * payload. Expressing actions as classes enables powerful
   * type checking in reducer functions.
   *
   * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
   */
  export class SearchAction implements Action {
    type = ActionTypes.SEARCH;
    constructor(public payload: string) { }
  }

  export class SearchSuccessAction implements Action {
    type = ActionTypes.SEARCH_SUCESS;
    constructor(public payload: Array<IProduct>) { }
  }

  export class SearchFailedAction implements Action {
    type = ActionTypes.SEARCH_FAILED;
    public payload: IProductsState = productInitialState;
  }

  /**
   * Export a type alias of all actions in this action group
   * so that reducers can easily compose action types
   */
  export type Actions
    = SearchAction
    | SearchSuccessAction
    | SearchFailedAction;
}
