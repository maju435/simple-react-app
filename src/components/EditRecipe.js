import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button.js';

class EditRecipe extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      ingredients: [],
      valueHandler: '',
    }
  }
  render() {
    return (
      <div className="add-recipe">
        <h3>Edit your recipe:</h3>
        <input placeholder="title of recipe" />
        <h3>Edit your ingredients:</h3>
          <div className="add-recipe__list">
            <ul>
              {/* {
                this.state.ingredients.map((v, i) => {
                  return <li key={"ingrd"+i}>{v}</li>
                })
              } */}
            </ul>
          </div>
        <div className="add-recipe__buttons">
          <Button color="red" onClick={this.props.displayModal}>Close</Button>
          <Button color="green">Save</Button>
        </div>
      </div>
    );
  }
}

EditRecipe.propTypes = {
  data: PropTypes.array,
  displayModal: PropTypes.func
};

export default EditRecipe;