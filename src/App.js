import React, { Component } from 'react';
import './App.css';


class GradientCard extends Component {
  render () {

    const cardGradient ={
      background:this.props.gradientBg,
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


  getRandomGreyVal() {
    return Math.floor((Math.random() * 256));
  }

  getRandomColor() {
  return 'rgb(' + this.getRandomGreyVal() + ',' + this.getRandomGreyVal() + ',' + this.getRandomGreyVal() + ')';
}

  generateRandomGradient() {

    var color1 = this.getRandomColor();
    var color2 = this.getRandomColor();

    console.log(color1 + ', ' + color2);

    return 'linear-gradient(to right,' + color1 + ', ' + color2 + ')';
  }

  render() {
    const cardCount = 30;
    var gradientCards = [];

    for (let i=0;i<cardCount;i++) {
      gradientCards.push(<GradientCard gradientBg={this.generateRandomGradient()}/>);
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
        <GradientCardContainer/>
      </div>
    );
  }
}

export default App;
