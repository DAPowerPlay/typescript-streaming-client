import {Products} from "../Enums/Products";
import {BaseProduct} from "./BaseProduct";

export class IndexProduct extends BaseProduct {

    public get index(): string {
        return this.getProperty("index");
    }

    public set index(value: string) {
        this.setProperty("index", value);
    }

    constructor(options: IndexProductOptions = {}) {
        super(Products.INDICES);
        this.setProperty("index", options.index || "");
    }
}

export interface IndexProductOptions {
    index?: string;
}
