// angular
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

// libs
import {Observable} from 'rxjs/Observable';
// import Rx from 'rxjs/Rx';

// app
import {Config} from '../../core/index';
import {Analytics, AnalyticsService} from '../../analytics/index';
import {IProduct} from '../states/index';
import {ProductList} from '../actions/index';

@Injectable()
export class ProductListService extends Analytics {

  constructor(public analytics: AnalyticsService,
              private http: Http) {
    super(analytics);
    this.category = ProductList.CATEGORY;
  }

  getProducts(searchQuery: string): Observable<Array<IProduct>> {
    return this.http.get('https://api.bestbuy.com/v1/products(' + searchQuery.trim().split(' ').
      map(keyword => ('search=' + keyword)).join('&') +
      ')?show=sku,name,mediumImage,regularPrice,shortDescription&pageSize=15&page=5&apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG&format=json')
      .map(res => res.json().products);
  }

  getProductBySku(sku: string): Observable<Array<any>> {
    return this.http.get('https://api.bestbuy.com/v1/products(sku in(' + sku + '))?apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG&format=json&pageSize=15&show=all&sort=bestSellingRank')
      .map(res => res.json().products);
  }
}
