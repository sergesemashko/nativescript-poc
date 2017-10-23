import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BestbuyComponent } from './bestbuy/bestbuy';
import { BestbuyProductComponent } from './bestbuy-product/bestbuy-product';
import { HomeComponent } from './home/home.component';

export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  BestbuyComponent,
  HomeComponent,
  BestbuyProductComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
