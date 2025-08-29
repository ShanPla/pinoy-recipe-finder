import React, { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-4">My Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p>You haven’t added any favorites yet.</p>
      ) : (
        <div className="row g-4 align-items-stretch">
          {favorites.map((recipe) => (
            <div className="col-md-3" key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;