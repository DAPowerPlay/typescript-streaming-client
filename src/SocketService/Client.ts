import * as io from "socket.io-client";
import {
    Candle,
    Events,
    Index,
    IndicatorType,
    News,
    Orderbook,
    Products,
    Sentiment,
    Settings,
    TechnicalIndicator,
    Trade,
} from "..";
import {SocketService} from "./Interface/SocketService";

export class Client implements SocketService {
    protected connection: SocketIOClient.Socket;

    public connect(apiKey: string, apiSecret: string): Promise<this> {
        this.connection = io.connect(Settings.API_URL, {
            query: {
                apikey: apiKey,
                apisecret: apiSecret,
            },
            forceNew: true,
            rejectUnauthorized: false,
        });

        return new Promise((resolve, reject) => {
            this.connection.on(Events.ERROR, (error: string) => {
                reject(error);
            });

            this.connection.on(Events.CONNECT, () => {
                resolve(this);
            });
        });
    }

    public disconnect(cb?: (message: string) => void): void {
        this.connection.disconnect();
    }

    public onTrades(cb: (message: Trade) => void): void {
        this.connection.on(Products.TRADES, cb);
    }

    public onCandles(cb: (message: Candle) => void): void {
        this.connection.on(Products.CANDLES, cb);
    }

    public onIndices(cb: (message: Index) => void): void {
        this.connection.on(Products.INDICES, cb);
    }

    public onOrderbooksLv1(cb: (message: Orderbook) => void): void {
        this.connection.on(Products.ORDERBOOKS_LV1, cb);
    }

    public onOrderbooksLv2(cb: (message: Orderbook) => void): void {
        this.connection.on(Products.ORDERBOOKS_LV2, cb);
    }

    public onSentiments(cb: (message: Sentiment) => void): void {
        this.connection.on(Products.SENTIMENTS, cb);
    }

    public onNews(cb: (message: News) => void): void {
        this.connection.on(Products.NEWS, cb);
    }

    public onTechnicalIndicators<T extends IndicatorType>(cb: (message: TechnicalIndicator<T>) => void): void {
        this.connection.on(Products.TECHNICAL_INDICATORS, cb);
    }

    public subscribe(products: any[], cb?: (error: any, response: any) => void): void {
        const expandedProducts = products.map((product: any) => {
            if ("expand" in product) {
                return product.expand();
            }

            return product;
        });

        this.connection.emit(Events.SUBSCRIBE, expandedProducts, cb);
    }

    public unsubscribe(products: any[], cb?: (error: any, response: any) => void): void {
        this.connection.emit(Events.UNSUBSCRIBE, products, cb);
    }

    public streams(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.connection.emit("streams", (error: string, streams: any[]) => {
                if (error) {
                    reject(error);
                }

                resolve(streams);
            });
        });
    }
}
