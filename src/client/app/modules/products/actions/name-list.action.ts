import { Action } from '@ngrx/store';
import { type } from '../../core/utils/index';

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
    INIT: string;
    INITIALIZED: string;
    INIT_FAILED: string;
  }

  export const ActionTypes: IProductListActions = {
    INIT: type(`${CATEGORY} Init`),
    INITIALIZED: type(`${CATEGORY} Initialized`),
    INIT_FAILED: type(`${CATEGORY} Init Failed`)
  };

  /**
   * Every action is comprised of at least a type and an optional
   * payload. Expressing actions as classes enables powerful
   * type checking in reducer functions.
   *
   * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
   */
  export class InitAction implements Action {
    type = ActionTypes.INIT;
    payload: string = null;
  }

  export class InitializedAction implements Action {
    type = ActionTypes.INITIALIZED;
    search: string = null;
    constructor(public payload: Array<string>) { }
  }

  export class InitFailedAction implements Action {
    type = ActionTypes.INIT_FAILED;
    payload: string = null;
  }

  /**
   * Export a type alias of all actions in this action group
   * so that reducers can easily compose action types
   */
  export type Actions
    = InitAction
    | InitializedAction
    | InitFailedAction;
}
