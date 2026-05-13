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
  return (
    <div className="categoryList">
      {categories.map((list) => (
        <span
          key={list.id}
          onClick={() => onSelectCategory(list.category)}
          className={
            selectCategory === list.category
              ? "categoryMenuItemActive"
              : "categoryMenuItem"
          }
        >
          {list.category}
        </span>
      ))}
    </div>
  );
}
