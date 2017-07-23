/**
 * Created by ansarimofid on 20/07/17.
 */
import React, {Component} from 'react'
import GradientCard from '../GradientCard/GradientCard'
import { NavLink } from 'react-router-dom'

const CollectionError = ()=> (
  <div class="uk-text-center uk-width-1-1">
    <h3>No item in collection</h3>
    <p>Tip: Add item in collection by clicking 'save' button on any card on <NavLink exact to='/' activeClassName="active">Home</NavLink></p>
    </div>
);

class Collection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gradientCollections:this.getGradientCollection()
    };
  }

  getGradientCollection() {
    let cardArray = [];
    // Fetch Gradients From Local Storage
    let gradientCollection = JSON.parse(localStorage.getItem("gradient-collection"));
    // Get array of random gradients cards
    if (gradientCollection !== null && gradientCollection.length) {
      for (let i=0;i<gradientCollection.length;i++) {
        cardArray.push(<GradientCard handleChange={this.handleChange.bind(this)} cardAction="remove"  gradientColors={gradientCollection[i]}/>);
      }
      return cardArray;
    }

    return false;
  }

  handleChange() {
    this.setState({
      gradientCollections:this.getGradientCollection()
    });
  }

  render() {
    return (
      <div class="uk-container">
        <h1 className="title-deco gradient-text uk-text-center uk-margin-medium-top uk-margin-medium-bottom">
          Saved-Collection
        </h1>
        <div class="uk-grid uk-margin-medium-bottom">
          {this.state.gradientCollections ?this.state.gradientCollections:<CollectionError/>}
        </div>
      </div>
    )
  }
}

export default Collection