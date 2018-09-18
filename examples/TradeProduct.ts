import {Client, TradeProduct} from "../src";

(async () => {
    const client = new Client();
    await client.connect("api-key", "api-secret");

    client.subscribe([
        new TradeProduct({
            exchange: "bitstamp",
            base: "BTC",
            quote: "USD",
        }), new TradeProduct({
            exchange: "binance",
        }),
    ]);

    client.onTrades((data) => {
        // do stuff
    });
})();
