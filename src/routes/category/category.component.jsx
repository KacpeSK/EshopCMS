import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (Object.keys(categoriesMap).length === 0) return;
    // Ensure the category exists in categoriesMap before setting products
    if (categoriesMap[category]) {
      setProducts(categoriesMap[category]);
    } else {
      // Handle non-existent category (redirect, show a message, etc.)
      console.error(`Category "${category}" not found`);
    }
  }, [category, categoriesMap]);

  return (
    <>
      <div className="category-page-container">
        <h2 className="category-container-title">{category.toUpperCase()}</h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="category-container">
            {products &&
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
