import type { CategoryProduct } from "../../types/Category";
import { api } from "../api";

async function getCategory(params = {}): Promise<CategoryProduct[]> {
    const {data} = await api.get<CategoryProduct[]>("/categories", {
        params,
    });

    return data;
}

export const categoryService = {
    getCategory
}