import React from 'react';
import { NavLink } from 'react-router-dom';

const Recipe = (props) => {
  return (
    <div className="recipe">
      <div className="recipe_img_box">
        <img className="recipe_img" alt="recipe img" src={props.recipe.img_link} />
      </div>
      <div className="recipe_descrp">
        <h5 className="recipe_title">
          {props.recipe.name.length > 20
            ? props.recipe.name.substring(0, 20) + ' ...'
            : props.recipe.name}
        </h5>
        <p className="recipe_info">
          Publisher: <span>{props.recipe.publisher}</span>
        </p>

        <NavLink className="recipe_btn" to={`/react-recipe-app/recipeInfo/${props.recipe.id}`}>
          view recipe
        </NavLink>
      </div>
    </div>
  );
};

export default Recipe;
