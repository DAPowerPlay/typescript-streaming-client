export interface Candle {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    size: number;
    tradesCounter: number;
    startedAtTimestamp: number;
    exchange: string;
    base: string;
    quote: string;
}
