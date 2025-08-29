import React, { useContext, useState } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const [search, setSearch] = useState("");

  const filteredFavorites = favorites.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-4 text-center">My Favorite Recipes</h1>

      <SearchBar search={search} setSearch={setSearch} />

      {favorites.length === 0 ? (
        <p className="text-center">You haven’t added any favorites yet.</p>
      ) : filteredFavorites.length === 0 ? (
        <p className="text-center">No such item exists in the menu.</p>
      ) : (
        <div className="row g-4 justify-content-center">
          {filteredFavorites.map((recipe) => (
            <div
              key={recipe.id}
              className={
                filteredFavorites.length === 1
                  ? "col-12 col-md-6 col-lg-5"
                  : "col-6 col-md-3"
              }
            >
              <RecipeCard
                recipe={recipe}
                single={filteredFavorites.length === 1}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;