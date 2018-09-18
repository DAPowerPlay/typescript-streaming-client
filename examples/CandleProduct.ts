import {CandleProduct, Client} from "../src";

(async () => {
    const client = new Client();
    await client.connect("api-key", "api-secret");

    client.subscribe([
        new CandleProduct({
            exchange: "bitstamp",
            base: "USD",
            quote: "BTC",
        }),
    ]);

    client.onCandles((data) => {
        // do stuff
    });
})();
