export interface Trade {
    base: string;
    quote: string;
    exchange: string;
    price: number;
    amount: number;
    timestamp: number;
    type?: null | TradeType;
    side?: null | TradeDirection;
}

enum TradeDirection {
    Buy,
    Sell,
}

enum TradeType {
    Market,
    Limit,
}
