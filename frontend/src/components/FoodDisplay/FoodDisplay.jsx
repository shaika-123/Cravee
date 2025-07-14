import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredList = food_list.filter(
    (item) =>
      category.toLowerCase() === "all" ||
      item.category?.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="food-display" id="food-display">
      <h2 className="h2we">Top dishes near you</h2>
      {filteredList.length === 0 ? (
        <p>No items available for this category.</p>
      ) : (
        <div className="food-display-list">
          {filteredList.map((item) => (
            <FoodItem
              key={item._id} // 🔄 better than index
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
