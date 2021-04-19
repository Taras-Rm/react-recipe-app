import React from 'react'
import Form from './Form';
import Recipes from './Recipes';

const MainSearch = (props) => {
    return (
        <div className="main_search">
            <Form recipeSearch={props.recipeSearch}/>
            <Recipes recipes={props.recipes}/>
        </div>
    )
}

export default MainSearch;