export interface Orderbook {
    exchange: string;
    base: string;
    quote: string;
    snapshot?: null | OrderBookSnapshot;
    patch?: null | OrderBookPatch;
}

interface OrderBookSnapshot {
    datetime: string;
    timestamp: number;
    asks: OrderItem[];
    bids: OrderItem[];
}

interface OrderItem {
    price: number;
    amount: number;
}

interface OrderBookPatch {
    datetime: string;
    timestamp: number;
    changes: OrderBookChange[];
}

interface OrderBookChange {
    operation?: null | OrderBookOperation;
    side: OrderBookSide;
    price: number;
    oldAmount: number;
    newAmount: number;
}

enum OrderBookOperation {
    Add,
    Subtract,
}

enum OrderBookSide {
    Ask,
    Bid,
}

enum OrderBookState {
    Snapshot,
    Patch,
}
