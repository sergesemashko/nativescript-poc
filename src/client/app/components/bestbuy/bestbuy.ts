// libs
import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { NameListService, SampleEffects, reducer } from '../../modules/sample/index';

// app
import {RouterExtensions, Config} from '../../modules/core/index';
import {IAppState, getProducts} from '../../modules/ngrx/index';
import {ProductList} from '../../modules/products/index';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'bestbuy.component.html',
  styleUrls: ['bestbuy.component.css']
})
export class BestbuyComponent implements OnInit {
  public products$: Observable<any>;
  public searchQuery: string;
  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {
    this.searchQuery = '';
  }

  ngOnInit() {
    this.products$ = this.store.let(getProducts);
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  search(): boolean {
    this.store.dispatch(new ProductList.SearchAction(this.searchQuery));
    //
    // this.products$ = this.store.let(
    //   getProducts.bind(this, this.searchQuery)
    // );
    // this.store.dispatch(new ProductList.SearchProductAction(this.searchQuery));
    return false;
  }

  readAbout() {
    // Try this in the {N} app
    // {N} can use these animation options
    this.routerext.navigate(['/about'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
