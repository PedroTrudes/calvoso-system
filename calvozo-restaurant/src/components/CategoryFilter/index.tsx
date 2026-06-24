import type { CategoryProduct } from "../../types/Category";

interface CategoryListProps {
  categories: CategoryProduct[];
  selectCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selectCategory,
  onSelectCategory,
}: CategoryListProps) {

  console.log("Categorias da API: " , categories);
  return (
    <div className="categoryList">
      {categories.map((list) => (
        <span
          key={list.id}
          onClick={() => onSelectCategory(list.name)}
          className={
            selectCategory === list.name
              ? "categoryMenuItemActive"
              : "categoryMenuItem"
          }
        >
          {list.name}
        </span>
      ))}
    </div>
  );
}
