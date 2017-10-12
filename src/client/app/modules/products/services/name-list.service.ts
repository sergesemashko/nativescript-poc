// angular
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import AwsSign from 'aws-sign';

// libs
import { Observable } from 'rxjs/Observable';

// app
import { Config } from '../../core/index';
import { Analytics, AnalyticsService } from '../../analytics/index';

// module
import { ProductList } from '../actions/index';
// const signer = new AwsSign({
//   accessKeyId: 'AKIAJ5HLUEYYFTK73PIQ',
//   secretAccessKey: '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'
// });

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
    return this.http.get(`${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/data.json`)
      .map(res => res.json());
  }
}
