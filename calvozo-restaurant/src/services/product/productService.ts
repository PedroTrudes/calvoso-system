import type { Product } from "../../types/Product.ts";
import { api } from "../api.ts";

async function getProducts(params = {}): Promise<Product[]> {
    const { data } = await api.get<Product[]>("/products", {
        params
    })

    return data;
}

export const productService = {
getProducts
}