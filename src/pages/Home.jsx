import React, { useState } from "react";
import recipesData from "../data/recipes.json";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [search, setSearch] = useState("");

  const filtered = recipesData.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <SearchBar search={search} setSearch={setSearch} />

      {filtered.length === 0 ? (
        <p className="text-center mt-4">No such item exists in the menu.</p>
      ) : (
        <div className="row g-4 justify-content-center">
          {filtered.map((recipe) => (
            <div
              key={recipe.id}
              className={
                filtered.length === 1
                  ? "col-12 col-md-6 col-lg-5"
                  : "col-12 col-md-3"
              }
            >
              <RecipeCard
                recipe={recipe}
                single={filtered.length === 1}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
