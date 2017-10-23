// angular
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

// libs
import {Observable} from 'rxjs/Observable';
// import Rx from 'rxjs/Rx';

// app
import {Config} from '../../core/index';
import {Analytics, AnalyticsService} from '../../analytics/index';
// NrzcAJWwiPaxVfuo9ZJ9X2XG
// https://api.bestbuy.com/v1/products(longDescription=iPhone*|sku=7619002)?show=sku,name&pageSize=15&page=5&apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG&format=json'
// module
import {IProduct} from '../states/index';
import {ProductList} from '../actions/index';

// const bestbuy = require('bestbuy-product-api/lib/index.js');
// const client = bestbuy.createClient({
//   awsId: 'AKIAJ5HLUEYYFTK73PIQ',
//   awsSecret: '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',
//   awsTag: 'nativescriptc-20'
// });
// import AwsSign from 'aws-sign';
// const signer = new AwsSign({
//   accessKeyId: 'AKIAJ5HLUEYYFTK73PIQ',
//   secretAccessKey: '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'
// });
// import AmazonAPI from 'amz-products/index';
//
// const bestbuy = new AmazonAPI({
//     accessKeyId: 'AKIAJ5HLUEYYFTK73PIQ',
//     secretAccessKey: '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',
//     associateId: 'nativescriptc-20',
//     locale: 'US'
// });
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

    // const opts = {
    //     method: 'GET',
    //     url: '/someUrl'
    // };
    // this.http.get(`${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/data.json`)
    // .map(res => res.json());
    // // return Rx.Observable.fromPromise(new Promise(
    //     (resolve, reject) => {
    //         client.itemSearch({
    //             director: 'Quentin Tarantino',
    //             actor: 'Samuel L. Jackson',
    //             searchIndex: 'DVD',
    //             audienceRating: 'R',
    //             responseGroup: 'ItemAttributes,Offers,Images'
    //         }, (err, results, response) => {
    //             if (err) {
    //             return reject(err);
    //             }
    //             return resolve(results);
    //         });
    // }));

  }

  getProductBySku(sku: string): Observable<Array<any>> {
    return this.http.get('https://api.bestbuy.com/v1/products(sku in(' + sku + '))?apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG&format=json&pageSize=15&show=all&sort=bestSellingRank')
      .map(res => res.json().products);
    // return this.http.get('https://api.bestbuy.com/v1/products(' + searchQuery.trim().split(' ').
    //   map(keyword => ('search=' + keyword)).join('&') +
    //   ')?show=sku,name,mediumImage,regularPrice,shortDescription&pageSize=15&page=5&apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG&format=json')
    //   .map(res => res.json().products);
  }
}
