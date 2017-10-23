// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { BestbuyRoutes } from './bestbuy/bestbuy.routes';
import { BestbuyProductRoutes } from './bestbuy-product/bestbuy-product.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...BestbuyProductRoutes,
  ...BestbuyRoutes
];
