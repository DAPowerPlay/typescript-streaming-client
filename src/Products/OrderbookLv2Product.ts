import {Products} from "../Enums/Products";
import {BaseMarketProduct, BaseMarketProductOptions} from "./BaseMarketProduct";

export class OrderbookLv2Product extends BaseMarketProduct {
    public constructor(options: BaseMarketProductOptions = {}) {
        super(Products.ORDERBOOKS_LV2, options);
    }
}
