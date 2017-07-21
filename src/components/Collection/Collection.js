/**
 * Created by ansarimofid on 20/07/17.
 */
import React, {Component} from 'react'
import GradientCard from '../GradientCard/GradientCard'

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
    for (let i=0;i<gradientCollection.length;i++) {
      cardArray.push(<GradientCard  gradientColors={gradientCollection[i]}/>);
    }
    return cardArray;
  }

  render() {
    let existingEntries = JSON.parse(localStorage.getItem("gradient-collection"));
    // existingEntries = existingEntries.map((data)=>{return data+'<br>';})
    return (
      <div class="uk-container">
        <h1 className="title-deco gradient-text uk-text-center uk-margin-medium-top uk-margin-medium-bottom">
          Saved-Collection
        </h1>
        <div class="uk-grid">
          {this.state.gradientCollections}
        </div>
        {/*<p>{existingEntries[0]}</p>
        <GradientCard gradientColors={existingEntries[0]}/>*/}
      </div>
    )
  }
}

export default Collection