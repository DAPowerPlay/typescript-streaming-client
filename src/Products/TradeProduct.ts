import {Products} from "../Enums/Products";
import {BaseMarketProduct, BaseMarketProductOptions} from "./BaseMarketProduct";

export class TradeProduct extends BaseMarketProduct {
    constructor(options: BaseMarketProductOptions = {}) {
        super(Products.TRADES, options);
    }
}
