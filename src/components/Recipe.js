import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Recipe.scss';

import Button from './Button.js';

class Recipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
    }
  }

  onClickRecipe = () => {
    const isActive = this.state.isActive;
    this.setState({
      isActive: !isActive,
    }, () => this.props.setRecipeIndex(this.props.itemKey));
  }

  render() {
    return (
      <div className="recipe">
        <h3 onClick={this.onClickRecipe} className="recipe__header">{this.props.data.title}</h3>
        <div className={`recipe__body ${this.state.isActive ? 'active' : null}`}>
          {this.state.isActive ? 
            <div className="recipe__body__ingredients">
              <h3>ingredients:</h3>
              <div className="ingredients__content">
                <ul>
                  {this.props.data.ingredients.map((v, i) => {
                    return <li key={'igredLi'+i}>{v}</li>
                  })}
                </ul>
              </div>
              <div className="ingredients__buttons">
                <Button onClick={() => this.props.deleteRecipe(this.props.itemKey)} color="red">Delete</Button>
                <Button onClick={() => this.props.displayModal()} color="blue">Edit</Button>
              </div>
            </div>
          : null }
        </div>
      </div>
    );
  }
}

Recipe.propTypes = {
  data: PropTypes.object,
  itemKey: PropTypes.number
};

export default Recipe;