import React from 'react'
import { withRouter } from 'react-router';
import recipesCopy from './../store.js';

class RecipeInfo extends React.Component {
    state = {
        activeRecipe: {}
    }

    componentDidMount() {
        let tr = recipesCopy.filter(el => el.id === Number(this.props.match.params.id))
        this.setState({ activeRecipe: tr[0] });
    }

    render() {
        return (
            <div className="recipeInfo">
                <img className='recipeInfo_img' alt='recipe img' src={this.state.activeRecipe.img_link} />
                <div className="recipeInfo_text">
                    <h3 className='recipeInfo_title'>
                        {this.state.activeRecipe.name}
                    </h3>
                    <h4 className='recipeInfo_publisher'>
                        Publisher:<span> {this.state.activeRecipe.publisher}</span>
                    </h4>
                    <h5 className='recipeInfo_website'>
                        Website: <a href="#r">{this.state.activeRecipe.publisher}</a>
                    </h5>
                </div>
            </div>
        )
    }
}

let RecipeInfoUrlComponent = withRouter(RecipeInfo);

export default RecipeInfoUrlComponent;