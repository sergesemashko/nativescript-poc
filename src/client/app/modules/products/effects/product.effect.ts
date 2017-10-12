// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

// module
import { ProductListService } from '../services/name-list.service';
import { ProductList } from '../actions/index';

@Injectable()
export class SampleEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(ProductList.ActionTypes.INIT)
    .startWith(new ProductList.InitAction)
    .switchMap(() => this.ProductListService.getProducts())
    .map(payload => {
      let names = payload;
      return new ProductList.InitializedAction(names);
    })
    // nothing reacting to failure at moment but you could if you want (here for example)
    .catch(() => Observable.of(new ProductList.InitFailedAction()));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private ProductListService: ProductListService
  ) { }
}
