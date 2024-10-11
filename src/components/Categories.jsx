import React, { useState } from "react";

const Categories = () => {
  const [Category, setCategory] = useState([
    "All",
    "Veg",
    "Non-Veg",
    "Chinese",
    "Italian",
    "Japanese",
    "Indian",
  ]);
  return (
    <div className="bg-gray-200 p-[5px] sm:p-1.5 font-semibold">
      <ul className="flex gap-2 sm:gap-5 flex-wrap sm:ml-9">
        {Category.map((item,index) => (
          <li className="border-2 sm:py-2 rounded px-4 hover:border-white transition-all ease-in-out" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
