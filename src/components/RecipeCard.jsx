import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card shadow-sm h-100">
      <img 
        src={recipe.image} 
        alt={recipe.name} 
        className="card-img-top"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text">{recipe.description}</p>
        <Link to={`/recipe/${recipe.id}`} className="btn btn-primary mt-auto">
          View Recipe →
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
