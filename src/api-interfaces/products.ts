import { ProductModel } from "./product";

export interface ProductsModel {
    items: ProductModel[];
    itemCount: number;
    total: number;
    pageCount:0;
    next: string;
    previous: string;
}