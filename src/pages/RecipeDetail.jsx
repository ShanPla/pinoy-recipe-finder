import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data/recipes.json";
import { FavoritesContext } from "../contexts/FavoritesContext";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  // --- Hooks first ---
  const savedRating = JSON.parse(localStorage.getItem(`rating-${id}`)) || 0;
  const [rating, setRating] = useState(savedRating);

  const savedState = recipe
    ? JSON.parse(localStorage.getItem(`checked-${id}`)) || recipe.ingredients.map(() => false)
    : [];
  const [checkedIngredients, setCheckedIngredients] = useState(savedState);

  // --- Handlers ---
  const handleRating = (value) => {
    setRating(value);
    localStorage.setItem(`rating-${id}`, JSON.stringify(value));
  };

  const toggleCheckbox = (index) => {
    const newChecked = [...checkedIngredients];
    newChecked[index] = !newChecked[index];
    setCheckedIngredients(newChecked);
    localStorage.setItem(`checked-${id}`, JSON.stringify(newChecked));
  };

  const checkAll = () => setCheckedIngredients(recipe.ingredients.map(() => true));
  const uncheckAll = () => setCheckedIngredients(recipe.ingredients.map(() => false));

  // --- Early return after hooks ---
  if (!recipe) return <p className="container mt-4">Recipe not found.</p>;

  return (
    <div className="container py-4">
      <img 
        src={recipe.image} 
        alt={recipe.name} 
        className="recipe-detail-img mb-3 rounded"
      />
      <h1 className="fw-bold">{recipe.name}</h1>
      <p className="text-muted">{recipe.description}</p>

      <div className="mb-3">
        <h4>Rate this Recipe</h4>
        {[1,2,3,4,5].map((star) => (
          <span
            key={star}
            style={{
              cursor: "pointer",
              color: star <= rating ? "#ffc107" : "#e4e5e9",
              fontSize: "1.5rem",
            }}
            onClick={() => handleRating(star)}
          >
            ★
          </span>
        ))}
        {rating > 0 && <span className="ms-2">({rating}/5)</span>}
      </div>

      <h4>Ingredients</h4>
      <div className="mb-2">
        <button className="btn btn-sm btn-primary me-2" onClick={checkAll}>Check All</button>
        <button className="btn btn-sm btn-secondary" onClick={uncheckAll}>Uncheck All</button>
      </div>
      <ul className="list-group mb-3">
        {recipe.ingredients.map((ing, i) => (
          <li className="list-group-item d-flex align-items-center" key={i}>
            <input
              type="checkbox"
              checked={checkedIngredients[i]}
              onChange={() => toggleCheckbox(i)}
              className="me-2"
            />
            <span style={{ textDecoration: checkedIngredients[i] ? "line-through" : "none" }}>
              {ing}
            </span>
          </li>
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
