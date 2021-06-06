import React from 'react';
import { withRouter } from 'react-router';
import recipesCopy from './../store.js';

class RecipeInfo extends React.Component {
  state = {
    activeRecipe: {},
  };

  componentDidMount() {
    let tr = recipesCopy.filter((el) => el.id === Number(this.props.match.params.id));
    this.setState({ activeRecipe: tr[0] });
  }

  render() {
    return (
      <div className="recipeInfo">
        <h3 className="recipeInfo_title">{this.state.activeRecipe.name}</h3>
        <img className="recipeInfo_img" alt="recipe img" src={this.state.activeRecipe.img_link} />
        <div className="recipeInfo_text">
          <h4 className="recipeInfo_publisher">
            Publisher:<span> {this.state.activeRecipe.publisher}</span>
          </h4>
          <h5 className="recipeInfo_website">
            Website: <a href="#r">{this.state.activeRecipe.publisher}</a>
          </h5>
          <div className="recipeInfo_recipe">
            <span>Recipe</span>
            <p className="recipeInfo_recipe_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo nemo animi
              doloribus eaque vitae non magnam, optio cupiditate a, quos amet itaque praesentium
              deleniti aperiam voluptatibus aspernatur aut. Est! <br /> <br /> Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Quae fugiat necessitatibus saepe accusamus et,
              sint aliquam nulla quasi. Ipsum impedit rerum aut! Dolores iure accusamus repellat, ut
              eum
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate expedita ab
              corrupti omnis sint ullam, laborum ipsa vel commodi odio consectetur delectus
              doloremque sit provident animi porro a quaerat tempore. assumenda aut.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

let RecipeInfoUrlComponent = withRouter(RecipeInfo);

export default RecipeInfoUrlComponent;
