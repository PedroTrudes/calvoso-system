import { Link } from "react-router-dom";
import { ProductList } from "../../components/ProductList";
import "./styles.css";
import { useEffect, useState } from "react";
import { CategoryFilter } from "../../components/CategoryFilter";
import { productService } from "../../services/product/productService";
import { categoryService } from "../../services/category/categoryService";
import type { Product } from "../../types/Product";
import type { CategoryProduct } from "../../types/Category";

export function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<CategoryProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  useEffect(() => {
    async function loadData() {
      try {
        const [productsData, categoryData] = await Promise.all([
          productService.getProducts(),
          categoryService.getCategory()
        ]);
        setProducts(productsData);
        setCategory(categoryData);
        
      } catch (error) {
        console.log("Erro ao buscar produtos", error);
      }
    }
    loadData();
  }, [])

  const listProductFilter =
    selectedCategory === "todos"
      ? products
      : products.filter(
        (product) => {
          return product.category.name === selectedCategory;
        });
        
  return (
    <div className="containerProductPage">
      <div className="productPageHeader">
        <h2>Produtos registrados</h2>
        <Link to={"/produto/registrar"} className="buttonFormsPrimary">
          Novo produto
        </Link>
      </div>
      <div className="productPageContainerList">
        <CategoryFilter
          categories={category}
          selectCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <ProductList products={listProductFilter} />
      </div>
    </div>
  );
}
