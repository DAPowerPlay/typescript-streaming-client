import {Products} from "../Enums/Products";
import {BaseProduct} from "./BaseProduct";

export class SentimentProduct extends BaseProduct {

    public get currency() {
        return this.getProperty("currency");
    }

    public set currency(value: string) {
        this.setProperty("currency", value);
    }

    public constructor(options: SentimentProductOptions) {
        super(Products.SENTIMENTS);
        this.setProperty("currency", options.currency || "");
    }
}

export interface SentimentProductOptions {
    currency?: string;
}
