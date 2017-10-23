// libs
import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { NameListService, SampleEffects, reducer } from '../../modules/sample/index';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';

// app
import {RouterExtensions, Config} from '../../modules/core/index';
import {IAppState, getProducts} from '../../modules/ngrx/index';
import {ProductList} from '../../modules/products/index';
import { CategoryService } from '../../modules/products/services/category.service';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'bestbuy.component.html',
  styleUrls: ['bestbuy.component.css']
})
export class BestbuyComponent implements OnInit {
  public products$: Observable<any>;
  public searchQuery: string;
  public categories$: any[];
  constructor(private store: Store<IAppState>, private route: ActivatedRoute, public routerext: RouterExtensions, private categoryService:CategoryService) {
    this.searchQuery = '';
  }

  ngOnInit() {
    this.products$ = this.store.let(getProducts);
    this.categories$ = this.categoryService.getCategoryList();
    this.route.params.subscribe(params => {
      const categoryId = String(params['categoryId']); // (+) converts string 'id' to a number
      if (categoryId) {
        this.products$ = this.categoryService.getProductsByCategory(categoryId);
      }

      // In a real app: dispatch action to load the details here.
    });
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  search(): boolean {
    this.products$ = this.store.let(getProducts);
    this.store.dispatch(new ProductList.SearchAction(this.searchQuery));
    //
    // this.products$ = this.store.let(
    //   getProducts.bind(this, this.searchQuery)
    // );
    // this.store.dispatch(new ProductList.SearchProductAction(this.searchQuery));
    return false;
  }

  onCategorySelect(categoryId) {
    this.products$ = this.categoryService.getProductsByCategory(categoryId);
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
