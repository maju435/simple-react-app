import React, { Component } from 'react';
import '../styles/AddRecipe.scss';

import Button from './Button.js';

class AddRecipe extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      ingredients: [],
      valueHandler: '',
    }
  }
  addIngredient = () => {
    let table = this.state.ingredients;
    table.push(this.state.valueHandler);
    this.setState({
      ingredients: table,
      valueHandler: '',
    }, console.log(this.state));
  }
  saveNewRecipe = () => {
    let data = this.props.localStorage;
    if (!data) {
      data = []
    }
    data.sort().push({
      title: this.state.title,
      ingredients: this.state.ingredients
    });
    const newLocalStorageData = JSON.stringify(data)
    this.props.setNewData(newLocalStorageData);
    this.props.displayModal();
  }
  render() {
    return (
      <div className="add-recipe">
        <h3>Name of recipe:</h3>
        <input placeholder="title of recipe" value={this.state.title} onChange={e => this.setState({title: e.target.value})}/>
        <h3>Your ingredients:</h3>
          <div className="add-recipe__list">
            <ul>
              {
                this.state.ingredients.map((v, i) => {
                  return <li key={"ingrd"+i}>{v}</li>
                })
              }
            </ul>
          </div>
        <div className="add-recipe__new-ingredient">
          <input placeholder="pass new ingredient" value={this.state.valueHandler} onChange={e => this.setState({valueHandler: e.target.value})}/>
          <Button type="inputType" color="blue" onClick={this.addIngredient}>Add</Button>
        </div>
        <div className="add-recipe__buttons">
          <Button color="red" onClick={this.props.displayModal}>Close</Button>
          <Button color="green" onClick={this.saveNewRecipe}>Save</Button>
        </div>
      </div>
    );
  }
}

AddRecipe.propTypes = {

};

export default AddRecipe;