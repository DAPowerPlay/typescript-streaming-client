import {CandleProduct, Client, IndexProduct, TradeProduct} from "../src";

(async () => {
    const client = new Client();
    await client.connect("api-key", "api-secret");

    client.subscribe([
        new TradeProduct(),
        new IndexProduct(),
        new CandleProduct(),
    ]);

    client.onTrades((trade) => {
        // do stuff
    });

    client.onCandles((candle) => {
        // do stuff
    });

    client.onIndices((index) => {
        // do stuff
    });
})();
