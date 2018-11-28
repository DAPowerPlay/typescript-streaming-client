import {Products} from "../Enums/Products";
import {BaseProduct} from "./BaseProduct";

export class NewsProduct extends BaseProduct {

    public get currency() {
        return this.getProperty("currency");
    }

    public set currency(value: string) {
        this.setProperty("currency", value);
    }

    public constructor(options: NewsProductOptions) {
        super(Products.NEWS);
        this.setProperty("currency", options.currency || "");
    }
}

export interface NewsProductOptions {
    currency?: string;
}
