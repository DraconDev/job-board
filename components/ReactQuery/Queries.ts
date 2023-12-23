// import { ProductType } from "@/types/types";
// import { queryOptions } from "@tanstack/react-query";

// type productsQueryType = {
//     searchTerm: string;
//     searchType?: string;
// };

// export function productQuery({
//     searchTerm = "",
//     searchType = "categories",
// }: productsQueryType) {
//     let searchTermLower = searchTerm.toLowerCase();

//     if (searchTermLower === "" || searchTermLower === "all") {
//         return queryOptions({
//             queryKey: ["products"],
//             queryFn: () =>
//                 fetch("https://fakestoreapi.com/products").then(
//                     (res) => res.json() as Promise<ProductType[]>
//                 ),
//             // .then((data) => {}),
//         });
//     }

//     if (searchType === "categories") {
//         return queryOptions({
//             queryKey: ["products"],
//             queryFn: () => {
//                 // its mistypped on the api
//                 if (searchTermLower === "jewelry") {
//                     searchTermLower = "jewelery";
//                 }

//                 return fetch("https://fakestoreapi.com/products")
//                     .then((res) => res.json() as Promise<ProductType[]>)
//                     .then((data) => {
//                         return data.filter((product) =>
//                             product.category
//                                 .toLowerCase()
//                                 .includes(searchTermLower)
//                         );
//                     });
//             },
//             // staleTime: 5 * 1000,
//         });
//     }

//     return queryOptions({
//         queryKey: ["products"],
//         queryFn: () => {
//             return fetch("https://fakestoreapi.com/products")
//                 .then((res) => res.json() as Promise<ProductType[]>)
//                 .then((data) => {
//                     return data.filter((product) =>
//                         product.title.toLowerCase().includes(searchTermLower)
//                     );
//                 });
//         },
//         // staleTime: 5 * 1000,
//     });
// }

// export function bestSellers() {
//     return queryOptions({
//         queryKey: ["products"],
//         queryFn: () => {
//             return fetch("https://fakestoreapi.com/products")
//                 .then((res) => res.json() as Promise<ProductType[]>)
//                 .then((data) => {
//                     const sortedData = sortByProperty(data, "rating");

//                     return sortedData.slice(0,10);
//                 });
//         },
//     });
// }

// function sortByProperty(
//     arr: ProductType[],
//     prop: keyof ProductType
// ): ProductType[] {
//     return arr.sort((a, d) => d.rating.count - a.rating.count);
// }
