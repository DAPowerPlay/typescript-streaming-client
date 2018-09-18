export class BaseProduct {

    private readonly _propertyBag = new Map<string, any>();

    public get product() {
        return this._propertyBag.get("product");
    }

    public constructor(product: string) {
        this.setProperty("product", product);
    }

    public expand(): any {
        const response = {};
        for (const [key, value] of this._propertyBag) {
            response[key] = value;
        }

        return response;
    }

    public setProperty(key: string, value: any) {
        this._propertyBag.set(key, value);
    }

    public getProperty(key: string) {
        return this._propertyBag.get(key);
    }

    public getPropertyKeys() {
        return Array.from(this._propertyBag.keys());
    }

    public compareTo(otherProduct: BaseProduct) {
        const myProperties = this.getPropertyKeys();
        const otherProductProperties = otherProduct.getPropertyKeys();

        if (myProperties.length !== otherProductProperties.length) {
            return false;
        }

        for (const myProperty of myProperties) {
            if (this.getProperty(myProperty) !== otherProduct.getProperty(myProperty)) {
                return false;
            }
        }

        return true;
    }
}
