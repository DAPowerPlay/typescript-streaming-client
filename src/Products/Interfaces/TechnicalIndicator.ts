export interface TechnicalIndicator<T extends IndicatorType> {
    data: T;
    base: string;
    quote: string;
    exchange: string;
    name: string;
}

export interface IndicatorType {
    params: any;
    result: any;
}

export interface TimePeriodNumeric extends IndicatorType {
    params: TimePeriodParam;
    result: NumericResult;
}

export interface Sar extends IndicatorType {
    params: SarParams;
    result: NumericResult;
}

export interface Macd extends IndicatorType {
    params: MacdParams;
    result: MacdResult;
}

export interface Bbands extends IndicatorType {
    params: BbandsParams;
    result: BbandsResult;
}

export interface Stoch extends IndicatorType {
    params: StochParams;
    result: StochResult;
}

interface StochParams {
    slowDPeriod: number;
    fastKPeriod: number;
    slowDMAType: number;
    slowKMAType: number;
    slowKPeriod: number;
}

interface StochResult {
    slowD: number;
    slowK: number;
}
interface BbandsParams {
    maType: number;
    nbDevUp: number;
    nbDevDn: number;
    timePeriod: number;
}

interface BbandsResult {
    lower: number;
    middle: number;
    upper: number;
}

interface MacdResult {
    hist: number;
    macd: number;
    signal: number;
}

interface MacdParams {
    fastPeriod: number;
    signalPeriod: number;
    slowPeriod: number;
}

interface SarParams {
    accelerationFactor: number;
    maximumAcceleration: number;
}

interface TimePeriodParam {
    timePeriod: number;
}

interface NumericResult {
    value: number;
}
