import { Category } from "./Product";

interface CategoryProps {
  category: Category;
}

const CategoryBadge = ({ category }: CategoryProps) => {
  return (
    <div>
      <span
        className={
          category === "phone"
            ? "bg-red-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm"
            : category === "tablet"
            ? "bg-green-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm"
            : "bg-yellow-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm"
        }
      ></span>
    </div>
  );
};

export default CategoryBadge;
