export interface Product {
    id: number;
    name: string;
    description: string;
    menu_active: boolean;
    imagem: string;
    category: {
        id: number;
        name: string
    };
    product_variation: {
        id: number;
        name: string;
        variation_active: boolean;
    }[];
}