import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Categories from "./components/Categories";
import Card from "./components/card";
import Footer from "./components/footer";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <header>
        <Navbar />
        <Categories />
      </header>
      <main>
        <h1 className="text-4xl font-bold text-center py-4 shadow-md">Our Recipes</h1>
        <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-5 mt-4">
          {data &&
            Object.entries(data.recipes).map((item) => (
              <Card
                key={item[1].id}
                title={item[1].name}
                description={item[1].ingredients}
                image={item[1].image}
              />
            ))}
        </div>
      </main>
        <Footer />
    </div>
  );
};

export default App;
