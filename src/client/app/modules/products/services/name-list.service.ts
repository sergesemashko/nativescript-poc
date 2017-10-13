// angular
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// libs
import { Observable } from 'rxjs/Observable';
const Obs = require('rxjs');

// app
import { Config } from '../../core/index';
import { Analytics, AnalyticsService } from '../../analytics/index';

// module
import { ProductList } from '../actions/index';
// import AwsSign from 'aws-sign';
// const signer = new AwsSign({
//   accessKeyId: 'AKIAJ5HLUEYYFTK73PIQ',
//   secretAccessKey: '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'
// });
const AmazonAPI = require('amz-products');

const amazon = new AmazonAPI({
    accessKeyId: 'AKIAJ5HLUEYYFTK73PIQ',
    secretAccessKey: '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',
    associateId: 'nativescriptc-20',
    locale: 'US'
});
@Injectable()
export class ProductListService extends Analytics {

  constructor(
    public analytics: AnalyticsService,
    private http: Http
  ) {
    super(analytics);
    this.category = ProductList.CATEGORY;
  }

  getProducts(): Observable<Array<string>> {
    // const opts = {
    //     method: 'GET',
    //     url: '/someUrl'
    // };
    // this.http.get(`${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/data.json`)
    // .map(res => res.json());
    return Obs.fromPromise(new Promise((resolve, reject) => {
      amazon.getItemsInBrowseNode({
          BrowseNode: 290060 // Outdoors & Nature
      }, (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    }));

  }
}
