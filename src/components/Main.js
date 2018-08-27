import React, { Component } from 'react';
import '../styles/Main.scss'

import Recipe from './Recipe.js';
import Modal from './Modal.js';
import Button from './Button.js';
import AddRecipe from './AddRecipe.js';
import EditRecipe from './EditRecipe.js';

class Main extends Component {
  constructor(){
    super();
    this.state = {
      modalIsActive: false,
      localStorage: JSON.parse(localStorage.getItem('Recipebook')),
      modalContentType: null,
      modalContent: null,
      chosenRecipeIndex: null, 
    }
  }

  displayModal = (content) => {
    this.setState({
      modalIsActive: !this.state.modalIsActive,
      modalContentType: content,
    });
  }

  setRecipeIndex = (index) => {
    this.setState({
      chosenRecipeIndex: index,
    });
  }

  setNewData = (data) => {
    // funtction push ingredients to localStorage
    const sortItems = (a, b) => {
      // funtction to sorting items by alphabet
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
    
      let comparison = 0;
      if (titleA > titleB) {
        comparison = 1;
      } else if (titleA < titleB) {
        comparison = -1;
      }
      return comparison;
    }
    const sortedData = JSON.parse(data).sort(sortItems);
    this.setState({
      localStorage: sortedData
    }, () => {
      localStorage.setItem('Recipebook', JSON.stringify(sortedData));
    });
  }

  deleteRecipe = (index) => {
    const array = this.state.localStorage.slice();
    array.splice(index, 1);
    this.setNewData(JSON.stringify(array));
  }

  editRacipe = (newData) => {
    const array = this.state.localStorage.slice();
    const index = this.state.chosenRecipeIndex;
    array[index] = newData;
    this.setNewData(JSON.stringify(array));
  }

  render() {
    console.log(this.state.localStorage);
    return (
      <main>
        <div className="main-cont">
          <div className="main-cont__header">
            <h2>Your recipes:</h2>
          </div>
          <div className="main-cont__body">
            {
              this.state.localStorage.map((v, i) => {
                return (
                  <Recipe 
                    itemKey={i} 
                    displayModal={() => this.displayModal('edit')}
                    deleteRecipe={this.deleteRecipe}
                    setRecipeIndex={this.setRecipeIndex}
                    key={i+'recipe'} 
                    data={v}
                  />
                )
              })
            }
          </div>
          <div className="main-cont__buttons">
            <Button onClick={() => this.displayModal('add')} color="green">Add recipe</Button>
          </div>
        </div>
        { this.state.modalIsActive ?
          <Modal data={this.state.localStorage} displayModal={() => this.displayModal(null)} title="Recipe">
            {this.state.modalContentType === 'add' ? 
              <AddRecipe 
                displayModal={() => this.displayModal(null)} 
                localStorage={this.state.localStorage}
                setNewData={this.setNewData}
              /> 
            : null}
            {this.state.modalContentType === 'edit' ? 
              <EditRecipe 
                displayModal={() => this.displayModal(null)} 
                data={this.state.localStorage[this.state.chosenRecipeIndex]}
                setNewData={this.setNewData}
                editRacipe={this.editRacipe}
              /> 
            : null}
          </Modal>
        : null }
      </main>
    );
  }
}

export default Main;