import React, { Component } from 'react';
import GradientCard from './components/GradientCard/GradientCard';
import './App.css';


class GradientCardContainer extends Component {

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

    return gradientColors;
  }

  handleClick() {
    console.log("Hello");
    this.forceUpdate()
  }

  render() {
    const cardCount = this.props.cardCount;
    var gradientCards = [];

    // Get array of random gradients
    for (let i=0;i<cardCount;i++) {
      gradientCards.push(<GradientCard gradientDeg={this.getRandomAngle()} gradientBg={this.generateRandomGradient(this.props.gradientColorCount)}/>);
    }


    return(
      <div class="uk-container">
        <button class="uk-button uk-button-danger reload-btn" onClick={this.handleClick.bind(this)}><span is  uk-icon="icon: refresh;ratio:2"></span></button>
        <div class="uk-grid">
          {gradientCards}
        </div>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div class="App">
        <GradientCardContainer cardCount={50} gradientColorCount={2}/>
      </div>
    );
  }
}

export default App;
