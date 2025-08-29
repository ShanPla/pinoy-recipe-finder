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
      <div className="row g-4 align-items-stretch">
        {filtered.map((recipe) => (
          <div className="col-md-3" key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
