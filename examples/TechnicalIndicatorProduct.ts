import {Bbands, Client, TechnicalIndicatorProduct} from "../src";

(async () => {
    const client = new Client();
    await client.connect("api-key", "api-secret");

    client.subscribe([
        new TechnicalIndicatorProduct({
            indicator: "bbands",
        }),
    ]);

    client.onTechnicalIndicators<Bbands>((data) => {
        // do stuff
    });
})();
