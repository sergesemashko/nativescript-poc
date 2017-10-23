import {ProductListService} from './product-list.service';
import {CategoryService} from './category.service';

export const PRODUCT_PROVIDERS: any[] = [
  ProductListService,
  CategoryService
];

export * from './product-list.service';
