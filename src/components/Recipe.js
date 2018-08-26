import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Recipe.scss'

class Recipe extends Component {
  render() {
    return (
      <div className="recipe">
        <h3 className="recipe__header">Żeberka grilowane</h3>
        <div className={`recipe__body ${this.props.isActive ? 'active' : null}`}>
          <div className="recipe__body__ingrediens">
            <h3>Ingrediens:</h3>
            <div className="ingrediens__content">
              <ul>
                <li>
                  składnik
                </li>
                <li>
                  składnik
                </li>
                <li>
                  składnik
                </li>
              </ul>
            </div>
          </div>
          <div className="recipe__body__preparation">
            <h3>Preparation:</h3>
            <div className="preparation__content">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum justo enim, ac blandit justo hendrerit et. Integer faucibus, lectus vel venenatis tempus, leo ipsum interdum tortor, ac consectetur nisl lorem nec enim. Nullam non diam orci. Aliquam erat volutpat. Pellentesque gravida, dui a laoreet eleifend, quam leo consequat urna, vel porta lorem nunc non mi. Fusce porttitor tellus sed malesuada ultrices. Donec varius, velit at cursus condimentum, lorem ante porta elit, ac tincidunt arcu lectus non nisi. Sed gravida orci felis, sit amet volutpat dui ornare vitae.

              t magna neque, posuere ut bibendum egestas, vehicula vitae est. Curabitur varius lectus nunc, sit amet bibendum quam accumsan sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at lectus elit. Nulla lectus purus, efficitur nec nulla eu, dictum iaculis justo. Donec et porta est, vel volutpat odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

Recipe.propTypes = {

};

export default Recipe;