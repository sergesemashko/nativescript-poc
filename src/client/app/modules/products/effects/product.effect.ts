// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

// module
import { ProductListService } from '../services/product-list.service';
import { ProductList } from '../actions/index';


import {IProduct, IProductsState, productInitialState} from '../states/index';

@Injectable()
export class ProductEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() search$: Observable<Action> = this.actions$
    .ofType(ProductList.ActionTypes.SEARCH)
    .switchMap((action) => {
      console.log(action);
      return this.ProductListService.getProducts(action.payload)
    })
    .map(payload => {
      console.log(payload);
      let products: Array<IProduct> = payload;
      return new ProductList.SearchSuccessAction(products);
    })
    // nothing reacting to failure at moment but you could if you want (here for example)
    .catch(() => Observable.of(new ProductList.SearchFailedAction()));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private ProductListService: ProductListService
  ) { }
}
