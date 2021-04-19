import React from 'react'
import Recipe from './Recipe';

const Recipes = (props) => {
    return (
        <div className="recipes">
            {props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
        </div>
    )
}

export default Recipes;