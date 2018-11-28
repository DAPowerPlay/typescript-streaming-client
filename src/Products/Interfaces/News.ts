export interface News {
    currency: string;
    description: string;
    sentiment: string;
    title: string;
    type: string;
    url: string;
    virality: number;
    newsId: number;
    insertTime: number;
    reach: number;
    keywordName?: null | string;
}
