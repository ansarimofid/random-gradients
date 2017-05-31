/**
 * Created by ansarimofid on 29/05/17.
 */

import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import UIkit from 'uikit';

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

  onCopy(color) {
    UIkit.notification({
      message:'Copied:'+color,
      status:'primary'
    });
  }

  render() {

    const grColor1Style = {
      backgroundColor:this.props.gradientColors[0]
    };

    const grColor2Style = {
      backgroundColor:this.props.gradientColors[1]
    };

    return (
      <div class="uk-width-1-2@s uk-width-1-3@m uk-margin-medium-top">
        <div class="uk-card uk-card-default uk-card-hover gradient-card">
          <div class={`uk-card-media-top card-media`}>
            <Shapes gradientColors={this.props.gradientColors}/>
          </div>
          <div class="uk-card-body">
            <h6 class="uk-card-title"> {rgb2hex(this.props.gradientColors[1])} -> {rgb2hex(this.props.gradientColors[0])}</h6>
            <div class="colors">
              <div class="gr-color-group">
                <CopyToClipboard text={rgb2hex(this.props.gradientColors[1])} onCopy={()=>this.onCopy(rgb2hex(this.props.gradientColors[1]))}>
                  <div class="gr-color" style={grColor2Style}>
                    <span is uk-icon="icon: copy"></span>
                  </div>
                </CopyToClipboard>
                <CopyToClipboard text={rgb2hex(this.props.gradientColors[0])}>
                  <div class="gr-color" style={grColor1Style}>
                    <span is uk-icon="icon: copy"></span>
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <div class="action">
              <CopyToClipboard text={this.props.gradientColors}>
                <button class="uk-button uk-button-alt uk-button-secondary">Copy CSS</button>
              </CopyToClipboard>
              <button class="uk-button uk-button-secondary">Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GradientCard;