import MealList from "@/components/MealList";
import SingleMeal from "@/components/SingleMeal";
import React from "react";

const Menu = () => {
    return (
        <div className="bg-blur rounded-3xl px-6  shadow-xl m-5 h-9/10 ">
            <MealList />
        </div>
    );
};

export default Menu;
