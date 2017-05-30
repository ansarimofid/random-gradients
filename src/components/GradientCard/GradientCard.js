/**
 * Created by ansarimofid on 29/05/17.
 */

import React, {Component} from 'react';

import Shapes from '../Shapes';
import './Card.css';

class GradientCard extends Component {

  getRectStyle(colors) {

    let shape = `<div></div><svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
          <stop is stop-color="${colors[0]}" offset="0%"/>
          <stop is stop-color="${colors[1]}" offset="100%"/>
        </linearGradient>
      </defs>
      <path d="M69 37h247v247H69z" transform="translate(-69 -37)" fill="url(#a)" fill-rule="evenodd"/>
    </svg></div>`;

    return shape;

    /*return {
      background: 'linear-gradient(' + this.props.gradientDeg + 'deg ,' + colors + ')'
    }*/
  }

  getCircleShape(colors) {
    return {
      background: 'linear-gradient(' + this.props.gradientDeg + 'deg ,' + colors + ')',
      borderRadius: `50%`
    }

  }

  getTriangleShape(colors) {
    return {
      width: 0,
      height: 0,
      borderImage: 'linear-gradient(' + this.props.gradientDeg + 'deg ,' + colors + ')',
      borderLeft: `50px solid transparent`,
      borderRight: `50px solid transparent`,
      borderBottom: `100px solid`
    }
  }

  getRandomShapeStyle(colors) {
    // let shapes = ['rect','circle'];
    // const randomShape = shapes[Math.floor(Math.random()*2)];

    // console.log(colors);

    /*switch (Math.floor(Math.random() * 3)) {
      case 0: {
        return this.getRectStyle(colors);
      }
      case 1: {
        return this.getCircleShape(colors);
      }
      case 2: {
        return this.getTriangleShape(colors);
      }
      default: {
        return this.getRectStyle(colors);
      }
    }*/
    return this.getRectStyle(colors);

  }


  render() {

    return (
      <div class="uk-width-1-3@m uk-margin-medium-top">
        <div class="uk-card uk-card-default uk-card-hover gradient-card">
          <div class={`uk-card-media-top card-media`}>
            <Shapes gradientColors={this.props.gradientColors}/>
          </div>
          <div class="uk-card-body">
            <h6 class="uk-card-title">{this.props.gradientColors[0]} -> {this.props.gradientColors[1]}</h6>
            <div class="colors">
              <div class="gr-color-group">
                <div class="gr-color"></div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default GradientCard;