typescript-streaming-client
=========

This is socket.io client written in TypeScript using [socket.io-client](https://www.npmjs.com/package/@types/socket.io-client) to connect to our [DPP DataStreams](https://platform.dapowerplay.com/services/free).


Getting started
------------

``` 
npm install @dpp/ts-client --save
```

```
import {Client} from "@dpp/ts-client"

const client = new Client();

// Connect using your API key and secret
client.connect("api-key", "api-secret").then(() => {

    // Get a list of available products for subscribing
    client.streams().then((streams) => { console.log(streams); })

    // Subscribe to a product
    client.subscribe([{
        product: "*",
    }])
    
    // Listen to product and do stuff
    client.onTrades((trade) => {
        // do stuff
    })
    
}).catch((err) => { console.log(err); });
```

You can check [examples](./examples/) folder for more usage examples.
