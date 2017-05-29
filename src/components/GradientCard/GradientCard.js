/**
 * Created by ansarimofid on 29/05/17.
 */

import React, {Component} from 'react';
import './Card.css';

class GradientCard extends Component {

  getRectStyle(colors) {
    return {
      background: 'linear-gradient(' + this.props.gradientDeg + 'deg ,' + colors + ')'
    }
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

    switch (Math.floor(Math.random() * 3)) {
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
    }

  }


  render() {

    const gradientColor = this.props.gradientBg.join(',');

    // const gradientFilledShapes = ['shape-rect','shape-circle'];

    // const randomShape = gradientFilledShapes[Math.floor(Math.random()*2)];

    const cardMediaStyle = {
      background: 'linear-gradient(' + this.props.gradientDeg + 'deg ,' + gradientColor + ')'
    };

    const cardShapeStyle = this.getRandomShapeStyle(gradientColor);

    console.log(this.getRandomShapeStyle(gradientColor));

    return (
      <div class="uk-width-1-3@m uk-margin-medium-top">
        <div class="uk-card uk-card-default uk-card-hover gradient-card">
          <div class={`uk-card-media-top card-media`} style={cardShapeStyle}>
          </div>
          <div class="uk-card-body">
            <h6 class="uk-card-title">Media Top</h6>
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