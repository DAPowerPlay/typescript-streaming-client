import {BaseProduct} from "./BaseProduct";

export class BaseMarketProduct extends BaseProduct {
    public constructor(product: string, options: BaseMarketProductOptions = {}) {
        super(product);
        this.setProperty("exchange", options.exchange || "");
        this.setProperty("base", options.base || "");
        this.setProperty("quote", options.quote || "");
    }

    public get exchange(): string {
        return this.getProperty("exchange");
    }

    public set exchange(value: string) {
        this.setProperty("exchange", value);
    }

    public get base(): string {
        return this.getProperty("base");
    }

    public set base(value: string) {
        this.setProperty("base", value);
    }

    public get quote(): string {
        return this.getProperty("quote");
    }

    public set quote(value: string) {
        this.setProperty("quote", value);
    }
}

export interface BaseMarketProductOptions {
    exchange?: string;
    base?: string;
    quote?: string;
}
