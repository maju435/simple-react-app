import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/EditRecipe.scss';

import Button from './Button.js';

class EditRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.data.title,
      ingredients: this.props.data.ingredients,
      valueHandler: '',
    }
  }

  saveChanges = () => {
    const newObject = {
      title: this.state.title,
      ingredients: this.state.ingredients
    } 
    this.props.editRacipe(newObject);
    this.props.displayModal(false);
  }

  onChangeTitle = (e) => {
    const val = e.target.value
    this.setState({
      title: val,
    });
  }

  onChangeIngredients = (e, i) => {
    console.log(i)
    const val = e.target.value;
    const array = this.state.ingredients.slice();
    if (val === '' ){
      array.splice(i, 1);
    } else {
      array[i] = val;
    }
    this.setState({
      ingredients: array,
    });
  }

  addNewIngredient = (e) => {
    const val = e.target.value;
    this.setState({
      valueHandler: val,
    });
  }

  addIngredient = () => {
    const array = this.state.ingredients.slice();
    const newIngredient = this.state.valueHandler;
    if(newIngredient !== ''){
      array.push(newIngredient)
    }
    this.setState({
      ingredients: array,
      valueHandler: '',
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="edit-recipe">
        <h3>Edit title:</h3>
        <div className="edit-recipe__input">
          <input onChange={(e) => this.onChangeTitle(e)} value={this.state.title}/>
        </div>
        <h3>Edit ingredients:</h3>
          <div className="edit-recipe__input">
            {
              this.state.ingredients.map((v, i) => {
                return <input onChange={(e) => this.onChangeIngredients(e, i)} key={"ingrd"+i} value={v} />
              })
            }
            <input onChange={(e) => this.addNewIngredient(e)} value={this.state.valueHandler} />
            <Button type="inputType" color="blue" onClick={() => this.addIngredient()}>Add</Button>
          </div>
        <div className="edit-recipe__buttons">
          <Button color="red" onClick={this.props.displayModal}>Close</Button>
          <Button onClick={() => this.saveChanges()}color="green">Save</Button>
        </div>
      </div>
    );
  }
}

EditRecipe.propTypes = {
  data: PropTypes.object,
  displayModal: PropTypes.func
};

export default EditRecipe;