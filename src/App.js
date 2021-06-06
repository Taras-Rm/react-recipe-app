import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import recipesCopy from './store.js';
import MainSearch from './components/MainSearch';
import RecipeInfoUrlComponent from './components/RecipeInfo';

class App extends Component {
  state = {
    recipeName: '',
    recipes: recipesCopy,
  };

  recipeSearch = (e) => {
    let recipeName = e.target.elements.form_input.value;
    e.preventDefault();
    let recCpy = recipesCopy.filter((el) =>
      el.name.toLowerCase().includes(recipeName.toLowerCase()),
    );
    if (recCpy.length === 0) {
      alert('There is no recipe with such name');
    } else {
      this.setState({ recipes: recCpy });
    }
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <h1 className="header_title">
              <NavLink to="/react-recipe-app">Recipe Search</NavLink>
            </h1>
          </header>
          <Route
            path="/react-recipe-app"
            exact
            render={() => (
              <MainSearch recipeSearch={this.recipeSearch} recipes={this.state.recipes} />
            )}
          />
          <Route
            path="/react-recipe-app/recipeInfo/:id?"
            render={() => <RecipeInfoUrlComponent />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
