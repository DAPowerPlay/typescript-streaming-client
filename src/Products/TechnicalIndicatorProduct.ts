import {Products} from "../Enums/Products";
import {BaseMarketProduct, BaseMarketProductOptions} from "./BaseMarketProduct";

export class TechnicalIndicatorProduct extends BaseMarketProduct {

    public get indicator() {
        return this.getProperty("indicator");
    }

    public set indicator(value: string) {
        this.setProperty("indicator", value);
    }

    public constructor(options: TechnicalIndicatorProductOptions = {}) {
        super(Products.TECHNICAL_INDICATORS, options);
        this.setProperty("indicator", options.indicator || "");
    }
}

export interface TechnicalIndicatorProductOptions extends BaseMarketProductOptions {
    indicator?: string;
}
