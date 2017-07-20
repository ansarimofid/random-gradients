import React, { Component } from 'react';
import UIkit from 'uikit';
import ReactDOM from 'react-dom';

import GradientCard from '../GradientCard/GradientCard';
import './Home.css';

function rgb2hex(rgb){
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

class GradientCardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gradientCards:this.getGradientCardArray()
    };
  }

  getRandomAngle() {
    return Math.floor((Math.random() * 360));
  }

  getRandomGreyVal() {
    return Math.floor((Math.random() * 256));
  }

  getRandomColor() {
  return 'rgb(' + this.getRandomGreyVal() + ',' + this.getRandomGreyVal() + ',' + this.getRandomGreyVal() + ')';
}

  generateRandomGradient(count = 2) {

    if(count>4 || count<2)
      count = 2;

    let gradientColors =[];

    for (let i=0;i<count;i++)
      gradientColors.push(this.getRandomColor());

    gradientColors  = gradientColors.map((color)=>{
      return rgb2hex(color);
    });

    return gradientColors;
  }

  getGradientCardArray() {
    let cardArray = [];
    // Get array of random gradients cards
    for (let i=0;i<this.props.cardCount;i++) {
      cardArray.push(<GradientCard gradientDeg={this.getRandomAngle()} gradientColors={this.generateRandomGradient(this.props.gradientColorCount)}/>);
    }

    return cardArray;
  }

  handleClick() {
    UIkit.notification({
      message:'Reloaded All Gradients',
      status:'primary'
    });

    this.setState({
      gradientCards:this.getGradientCardArray()
    });

    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  loadMore() {
    this.setState({
      gradientCards:this.state.gradientCards.concat(this.getGradientCardArray())
    });
  }

  render() {

    return(
      <div class="uk-container">
        <button class="uk-button uk-button-danger reload-btn" onClick={this.handleClick.bind(this)}><span is  uk-icon="icon: refresh;ratio:2"></span></button>
        <div class="uk-grid">
          {this.state.gradientCards}
        </div>
        <button class="uk-button uk-button-danger uk-margin-medium-top uk-margin-medium-bottom" onClick={this.loadMore.bind(this)}>Load More</button>
      </div>
    )
  }
}


class Home extends Component {
  render() {
    return (
      <div class="App">
        <GradientCardContainer cardCount={25} gradientColorCount={2}/>
      </div>
    );
  }
}

export default Home;
