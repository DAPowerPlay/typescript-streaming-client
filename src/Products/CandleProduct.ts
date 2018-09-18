import {Products} from "../Enums/Products";
import {BaseMarketProduct, BaseMarketProductOptions} from "./BaseMarketProduct";

export class CandleProduct extends BaseMarketProduct {
    public constructor(options: BaseMarketProductOptions = {}) {
        super(Products.CANDLES, options);
    }
}
