export interface Trade {
    data: TradeData;
    base: string;
    quote: string;
    exchange: string;
}

interface TradeData {
    id: string;
    price: number;
    amount: number;
    datetime: string;
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
