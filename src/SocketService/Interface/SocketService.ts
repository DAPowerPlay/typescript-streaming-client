export interface SocketService {
    connect(endpoint: string, apiKey: string, apiSecret: string): Promise<this>;

    subscribe(products: any[], cb?: (error: any, response: any) => void): void;

    unsubscribe(products: any[], cb?: (error: any, response: any) => void): void;

    disconnect(cb?: (message: string) => void): void;

    streams(): Promise<any>;
}
