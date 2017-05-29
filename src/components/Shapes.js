/**
 * Created by ansarimofid on 29/05/17.
 */

import React, {Component} from 'react';

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

class Rect extends Component {
  render() {
    const colors = this.props.gradientColors;
    return (
      <svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id={getHashCode(colors.join('-'))}>
            <stop stopColor={colors[0]} offset="0%"/>
            <stop stopColor={colors[1]} offset="100%"/>
          </linearGradient>
        </defs>
        <path d="M69 37h247v247H69z" transform="translate(-69 -37)" fill={`url(#${getHashCode(colors.join('-'))})`}
              fillRule="evenodd"/>
      </svg>
    )
  }
}

class Circle extends Component {
  render() {
    const colors = this.props.gradientColors;
    return (
    <svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id={getHashCode(colors.join('-'))}>
          <stop stopColor={colors[0]} offset="0%"/>
          <stop stopColor={colors[1]} offset="100%"/>
        </linearGradient>
      </defs>
      <ellipse cx="191.5" cy="160.5" rx="121.5" ry="121.5" transform="translate(-70 -39)" fill={`url(#${getHashCode(colors.join('-'))})`} fillRule="evenodd"/>
    </svg>
    /*< svg
    width = "250"
    height = "250"
    viewBox = "0 0 250 250"
    xmlns = "http://www.w3.org/2000/svg" >
      < defs >
      < linearGradient
    x1 = "50%"
    y1 = "100%"
    x2 = "50%"
    y2 = "0%"
    id = {getHashCode(colors.join('-'))}>
  <
    stop
    stopColor = {colors[0]}
    offset = "0%" / >
      < stop
    stopColor = {colors[1]}
    offset = "100%" / >
      < / linearGradient >
      < / defs >
      < path
    d = "M69 37h247v247H69z"
    transform = "translate(-69 -37)"
    fill = {`url(#${getHashCode(colors.join('-'))})`}
    fillRule = "evenodd" / >
      < / svg >*/
  )
  }
}

class Triangle extends Component {
  render() {
    const colors = this.props.gradientColors;
    return (
    <svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id={getHashCode(colors.join('-'))}>
          <stop stopColor={colors[0]} offset="0%"/>
          <stop stopColor={colors[1]} offset="100%"/>
        </linearGradient>
      </defs>
      <path d="M185 38l124 248H61" transform="translate(-61 -38)" fill={`url(#${getHashCode(colors.join('-'))})`} fillRule="evenodd"/>
    </svg>
  )
  }
}

class Diamond extends Component {
  render() {
    const colors = this.props.gradientColors;
    return (
    <svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id={getHashCode(colors.join('-'))}>
          <stop stopColor={colors[0]} offset="0%"/>
          <stop stopColor={colors[1]} offset="100%"/>
        </linearGradient>
      </defs>
      <path transform="rotate(-45 117.665 219.962)" d="M102 70h176v176H102z"  fill={`url(#${getHashCode(colors.join('-'))})`} fillRule="evenodd"/>
    </svg>
  )
  }
}

class Polygon extends Component {
  render() {
    const colors = this.props.gradientColors;
    return (
    <svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id={getHashCode(colors.join('-'))}>
          <stop stopColor={colors[0]} offset="0%"/>
          <stop stopColor={colors[1]} offset="100%"/>
        </linearGradient>
      </defs>
      <path d="M188.144 34.544l122.5 89-46.79 144.01h-151.42l-46.79-144.01" transform="translate(-65 -34)" fill={`url(#${getHashCode(colors.join('-'))})`} fillRule="evenodd"/>
    </svg>
  )
  }
}

class RectStroked extends Component {
  render() {
    const colors = this.props.gradientColors;
    return (
      <svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id={getHashCode(colors.join('-'))}>
            <stop stopColor={colors[0]} offset="0%"/>
            <stop stopColor={colors[1]} offset="100%"/>
          </linearGradient>
        </defs>
        <path d="M76.5 44.5h232v232h-232z" transform="translate(-69 -37)" stroke={`url(#${getHashCode(colors.join('-'))})`} strokeWidth="15" fill="none" fillRule="evenodd"/>
      </svg>
    )
  }
}

class CircleStroked extends Component {
  render() {
    const colors = this.props.gradientColors;
    return (
      <svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id={getHashCode(colors.join('-'))}>
            <stop stopColor={colors[0]} offset="0%"/>
            <stop stopColor={colors[1]} offset="100%"/>
          </linearGradient>
        </defs>
        <ellipse cx="181.5" cy="166.5" rx="112.5" ry="112.5" transform="translate(-61 -46)" strokeWidth="15" stroke={`url(#${getHashCode(colors.join('-'))})`} fill="none" fillRule="evenodd"/>
      </svg>
      /*< svg
       width = "250"
       height = "250"
       viewBox = "0 0 250 250"
       xmlns = "http://www.w3.org/2000/svg" >
       < defs >
       < linearGradient
       x1 = "50%"
       y1 = "100%"
       x2 = "50%"
       y2 = "0%"
       id = {getHashCode(colors.join('-'))}>
       <
       stop
       stopColor = {colors[0]}
       offset = "0%" / >
       < stop
       stopColor = {colors[1]}
       offset = "100%" / >
       < / linearGradient >
       < / defs >
       < path
       d = "M69 37h247v247H69z"
       transform = "translate(-69 -37)"
       fill = {`url(#${getHashCode(colors.join('-'))})`}
       fillRule = "evenodd" / >
       < / svg >*/
    )
  }
}

class Shapes extends Component {

  render() {

    let shape = '';

    switch (Math.floor(Math.random() * 7)) {
      case 0: {
        shape = <Rect gradientColors={this.props.gradientColors}/>;
        break;
      }
      case 1: {
        shape = <Circle gradientColors={this.props.gradientColors}/>;
        break;
      }
      case 2: {
        shape = <Triangle gradientColors={this.props.gradientColors}/>;
        break
      }
      case 3: {
        shape = <Diamond gradientColors={this.props.gradientColors}/>;
        break
      }
      case 4: {
        shape = <Polygon gradientColors={this.props.gradientColors}/>;
        break
      }
      case 5: {
        shape = <CircleStroked gradientColors={this.props.gradientColors}/>;
        break
      }
      case 6: {
        shape = <RectStroked gradientColors={this.props.gradientColors}/>;
        break
      }
      default: {
        shape = <Rect gradientColors={this.props.gradientColors}/>;
        break;
      }
    }

    return (
      shape
    )
  }
}

export default Shapes;