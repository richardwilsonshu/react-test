export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: string;
    keywords: string;
    url?: string;
    category: string;
    subcategory?: string;
    stock?: number;
};

// export const AllProducts = [
// {
//     id: "1",
//     name: "Trainers",
//     price: 29.99,
//     keywords: "shoes",
//     category: "clothing"
// },
// {
//     id: "2",
//     name: "Lemon & Lime Sparkling Water",
//     price: 0.8,
//     keywords: "drink fizz",
//     category: "drink"
// },
// {
//     id: "3",
//     name: "Yorkie Bar x3",
//     price: 1.5,
//     keywords: "chocolate",
//     category: "food"
// },
// {
//     id: "4",
//     name: "Cookie (4 pack)",
//     price: 1.25,
//     keywords: "chocolate",
//     category: "food"
// }
// ] as IProduct[];