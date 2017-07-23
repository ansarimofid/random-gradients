/**
 * Created by ansarimofid on 29/05/17.
 */

import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import UIkit from 'uikit';
import TinyGradient from 'tinygradient';

import Shapes from '../Shapes';
import './Card.css';

function getGradientCss(colors) {
  // let gradient = TinyGradient(colors);
  return TinyGradient(colors).css();
}

function getHashCode(str) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function itemExistInArray(array, item) {
  for (let i = 0; i < array.length; i++) {
    // This if statement depends on the format of your array
    if (array[i][0] == item[0] && array[i][1] == item[1]) {
      return true;   // Found it
    }
  }
  return false;
}

class GradientCard extends Component {

  onCopy(color) {
    UIkit.notification({
      message: 'Copied ' + color,
      status: 'primary',
      pos: 'bottom-left'
    });
  }

  handleSave() {

    // Fetching Existing Entries
    let existingEntries = JSON.parse(localStorage.getItem("gradient-collection"));

    if (existingEntries == null) {
      existingEntries = [];
      existingEntries.push(this.props.gradientColors);
      UIkit.notification({
        message: 'Gradients Saved',
        status: 'primary',
        pos: 'bottom-left'
      });
    }
    // Check if item already exist
    else if(!itemExistInArray(existingEntries,this.props.gradientColors)) {
      existingEntries.push(this.props.gradientColors);
      UIkit.notification({
        message: 'Gradients Saved',
        status: 'primary',
        pos: 'bottom-left'
      });
    }
    else {
      UIkit.notification({
        message: 'Gradients Already Saved',
        pos: 'bottom-left'
      });
    }

    // Save allEntries back to local storage
    localStorage.setItem("gradient-collection", JSON.stringify(existingEntries));
  }

  handleRemove() {
    let existingEntries = JSON.parse(localStorage.getItem("gradient-collection"));

    existingEntries = existingEntries.filter((item) => {
      return JSON.stringify(item) !== JSON.stringify(this.props.gradientColors);
    });

    localStorage.setItem("gradient-collection", JSON.stringify(existingEntries));

    UIkit.notification({
      message: 'Gradients Removed',
      status: 'primary',
      pos: 'bottom-left'
    });
    this.props.handleChange();
  }

  render() {

    const grColor1Style = {
      backgroundColor: this.props.gradientColors[0]
    };

    const grColor2Style = {
      backgroundColor: this.props.gradientColors[1]
    };

    let  btnActn,actnLabel;

    // Action Handler
    if (this.props.cardAction === 'save') {
      btnActn = this.handleSave.bind(this);
      actnLabel = "Save";
    }
    else if(this.props.cardAction === 'remove') {
      btnActn = this.handleRemove.bind(this);
      actnLabel = "Remove";
    }

    return (
      <div class="uk-width-1-2@s uk-width-1-3@m uk-margin-medium-top">
        <div class="uk-card uk-card-default uk-card-hover gradient-card">
          <div class={`uk-card-media-top card-media`}>
            <Shapes gradientColors={this.props.gradientColors}/>
          </div>
          <div class="uk-card-body">
            <h6 class="uk-card-title"> {this.props.gradientColors[0]} -> {this.props.gradientColors[1]}</h6>
            <div class="colors">
              <div class="gr-color-group">
                <CopyToClipboard text={this.props.gradientColors[0]}
                                 onCopy={() => this.onCopy(this.props.gradientColors[0])}>
                  <div class="gr-color" style={grColor1Style}>
                    <span is uk-icon="icon: copy"></span>
                  </div>
                </CopyToClipboard>

                <CopyToClipboard text={this.props.gradientColors[1]}
                                 onCopy={() => this.onCopy(this.props.gradientColors[1])}>
                  <div class="gr-color" style={grColor2Style}>
                    <span is uk-icon="icon: copy"></span>
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <div class="action">
              <CopyToClipboard text={getGradientCss(this.props.gradientColors)}
                               onCopy={() => this.onCopy("Gradient CSS")}>
                <button class="uk-button uk-button-alt uk-button-secondary">Copy CSS</button>
              </CopyToClipboard>
              <button class="uk-button uk-button-secondary" onClick={btnActn}>{actnLabel}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GradientCard;