import {Products} from "../Enums/Products";
import {BaseProduct} from "./BaseProduct";

export class NewsProduct extends BaseProduct {
    public constructor() {
        super(Products.NEWS);
    }
}
