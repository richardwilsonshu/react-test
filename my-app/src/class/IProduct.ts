export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    keywords: string;
    url?: string;
    category: string;
    subcategory?: string;
};