import {Products} from "../Enums/Products";
import {BaseMarketProduct, BaseMarketProductOptions} from "./BaseMarketProduct";

export class OrderbookLv1Product extends BaseMarketProduct {
    public constructor(options: BaseMarketProductOptions = {}) {
        super(Products.ORDERBOOKS_LV1, options);
    }
}
