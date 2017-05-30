/**
 * Created by ansarimofid on 29/05/17.
 */

import React, {Component} from 'react';

import Shapes from '../Shapes';
import './Card.css';

function rgb2hex(rgb){
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

class GradientCard extends Component {

  render() {

    const grColor1Style = {
      backgroundColor:this.props.gradientColors[0]
    };

    const grColor2Style = {
      backgroundColor:this.props.gradientColors[1]
    };

    return (
      <div class="uk-width-1-3@m uk-margin-medium-top">
        <div class="uk-card uk-card-default uk-card-hover gradient-card">
          <div class={`uk-card-media-top card-media`}>
            <Shapes gradientColors={this.props.gradientColors}/>
          </div>
          <div class="uk-card-body">
            <h6 class="uk-card-title"> {rgb2hex(this.props.gradientColors[1])} -> {rgb2hex(this.props.gradientColors[0])}</h6>
            <div class="colors">
              <div class="gr-color-group">
                <div class="gr-color" style={grColor2Style}></div>
                <div class="gr-color" style={grColor1Style}></div>
              </div>
            </div>
            <div class="action">
              <button class="uk-button uk-button-alt uk-button-secondary">Copy CSS</button>
              <button class="uk-button uk-button-secondary">Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GradientCard;