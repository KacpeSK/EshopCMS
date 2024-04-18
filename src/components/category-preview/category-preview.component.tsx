import { Link } from "react-router-dom";
import { FC } from "react";

import ProductCard from "../product-card/product-card.component";
import { CategoryItem } from "../../store/categories/category.types";

import "./category-preview.styles.scss";

export type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <>
      <div className="category-preview-container">
        <h2>
          <Link
            to={title}
            className="title"
          >
            {title.toUpperCase()}
          </Link>
        </h2>
        <div className="preview">
          {products
            .filter((_, i) => i < 4)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPreview;
