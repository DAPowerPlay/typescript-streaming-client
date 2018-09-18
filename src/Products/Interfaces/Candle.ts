export interface Candle {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    size: number;
    tradesCounter: number;
    closeTradeTimestamp: number;
    openTradeTimestamp: number;
    startedAtTimestamp: number;
    exchange: string;
    instrument: string;
    isNew: boolean;
}
