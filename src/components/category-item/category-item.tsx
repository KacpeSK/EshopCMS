import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { MenuCategory } from "../category-menu/category-menu";
import "./category-item-styles.scss";

export type CategoryItemProps = {
  category: MenuCategory;
};

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div
      className="category-item-container"
      onClick={onNavigateHandler}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-item-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
