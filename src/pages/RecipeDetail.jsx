import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data/recipes.json";
import { FavoritesContext } from "../contexts/FavoritesContext";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  if (!recipe) return <p className="container mt-4">Recipe not found.</p>;

  return (
    <div className="container py-4">
      <img 
        src={recipe.image} 
        alt={recipe.name} 
        className="recipe-detail-img mb-3"
      />
      <h1 className="fw-bold">{recipe.name}</h1>
      <p className="text-muted">{recipe.description}</p>

      <h4>Ingredients</h4>
      <ul className="list-group mb-3">
        {recipe.ingredients.map((ing, i) => (
          <li className="list-group-item" key={i}>{ing}</li>
        ))}
      </ul>

      <h4>Instructions</h4>
      <ol className="list-group list-group-numbered mb-3">
        {recipe.instructions.map((step, i) => (
          <li className="list-group-item" key={i}>{step}</li>
        ))}
      </ol>

      <button
        className={`btn ${isFavorite(recipe.id) ? "btn-danger" : "btn-success"}`}
        onClick={() =>
          isFavorite(recipe.id) ? removeFavorite(recipe.id) : addFavorite(recipe)
        }
      >
        {isFavorite(recipe.id) ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default RecipeDetail;
