import React, { Component } from 'react';
import './App.css';


class GradientCard extends Component {
  render () {

    var gradientColor = this.props.gradientBg.join(',');

    const cardGradient ={
      background:'linear-gradient('+this.props.gradientDeg+'deg ,' + gradientColor + ')',
      minHeight:280
    };
    return(
      <div class="uk-width-1-3@m uk-margin-medium-top">
        <div class="uk-card uk-card-default uk-card-hover">
          <div class="uk-card-media-top" style={cardGradient}>
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

  render() {
    const cardCount = this.props.cardCount;
    var gradientCards = [];

    // Get array of random gradients
    for (let i=0;i<cardCount;i++) {
      gradientCards.push(<GradientCard gradientDeg={this.getRandomAngle()} gradientBg={this.generateRandomGradient(this.props.gradientColorCount)}/>);
    }

    return(
      <div class="uk-container">
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
