import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // ✅ Debug: Log values
  console.log("Category received:", category);
  console.log("Raw food list:", food_list);

  // ✅ Case-insensitive filtering
  const filteredList = food_list.filter(
    (item) =>
      category.toLowerCase() === "all" ||
      item.category?.toLowerCase() === category.toLowerCase()
  );

  console.log("Filtered food list:", filteredList);

  if (filteredList.length === 0) {
    return (
      <div className="food-display" id="food-display">
        <h2 className="h2we">Top dishes near you</h2>
        <p>No items available for this category.</p>
      </div>
    );
  }

  return (
    <div className="food-display" id="food-display">
      <h2 className="h2we">Top dishes near you</h2>
      <div className="food-display-list">
        {filteredList.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
