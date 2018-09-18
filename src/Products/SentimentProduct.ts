import {Products} from "../Enums/Products";
import {BaseProduct} from "./BaseProduct";

export class SentimentProduct extends BaseProduct {
    public constructor() {
        super(Products.SENTIMENTS);
    }
}
