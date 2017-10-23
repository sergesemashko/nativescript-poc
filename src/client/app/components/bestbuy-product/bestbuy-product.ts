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
import { ProductListService } from '../../modules/products/services/product-list.service';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'bestbuy-product.component.html',
  styleUrls: ['bestbuy.component.css']
})
export class BestbuyProductComponent implements OnInit {
  public product$: Observable<any>;
  public productSku: string;
  constructor(private store: Store<IAppState>, private route: ActivatedRoute, private productList: ProductListService) {
  }

  ngOnInit() {
    this.product$ = Observable.of([]);
    this.route.params.subscribe(params => {
      this.productSku = String(params['productSku']); // (+) converts string 'id' to a number
      if (this.productSku) {
        this.product$ = this.productList.getProductBySku(this.productSku);
      }

      // In a real app: dispatch action to load the details here.
    });
  }

}
