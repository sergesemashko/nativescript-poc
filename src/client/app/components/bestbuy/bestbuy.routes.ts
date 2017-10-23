import { BestbuyComponent } from './bestbuy';

export const BestbuyRoutes: Array<any> = [
  {
    path: 'bestbuy',
    component: BestbuyComponent
  },
  {
    path: 'bestbuy/:categoryId',
    component: BestbuyComponent
  },
];
