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

class TriangleStroked extends Component {
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
        <path d="M185 54.77L296.865 278.5H73.135L185 54.77z" transform="translate(-61 -38)" strokeWidth="15" stroke={`url(#${getHashCode(colors.join('-'))})`} fill="none" fillRule="evenodd"/>
      </svg>
    )
  }
}

class DiamondStroked extends Component {
  render() {
    const colors = this.props.gradientColors;
    return (
      <svg width="257" height="257" viewBox="0 0 257 257"  xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id={getHashCode(colors.join('-'))}>
            <stop stopColor={colors[0]} offset="0%"/>
            <stop stopColor={colors[1]} offset="100%"/>
          </linearGradient>
        </defs>
        <path transform="rotate(-45 121.873 221.755)" d="M109.5 77.5h166v166h-166z" stroke={`url(#${getHashCode(colors.join('-'))})`} strokeWidth="15" fill="none" fillRule="evenodd"/>
      </svg>
    )
  }
}

class PolygonStroked extends Component {
  render() {
    const colors = this.props.gradientColors;
    return (
      <svg width="254" height="253" viewBox="0 0 254 253" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id={getHashCode(colors.join('-'))}>
            <stop stopColor={colors[0]} offset="0%"/>
            <stop stopColor={colors[1]} offset="100%"/>
          </linearGradient>
        </defs>
        <path d="M183.144 34.544l117.5 89.762-44.88 145.238h-145.24l-44.88-145.238z" transform="translate(-56 -25)" stroke={`url(#${getHashCode(colors.join('-'))})`} strokeWidth="15" fill="none" fillRule="evenodd"/>
      </svg>
    )
  }
}

class TriangleRight extends Component {
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
        <path  d="M308 162L60 286V38" transform="translate(-60 -38)" fill={`url(#${getHashCode(colors.join('-'))})`} fillRule="evenodd"/>
      </svg>
    )
  }
}

class TriangleRightStroked extends Component {
  render() {
    const colors = this.props.gradientColors;
    return (
      <svg width="257" height="258" viewBox="0 0 257 258" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id={getHashCode(colors.join('-'))}>
            <stop stopColor={colors[0]} offset="0%"/>
            <stop stopColor={colors[1]} offset="100%"/>
          </linearGradient>
        </defs>
        <path d="M331 164L99 280V48z" transform="translate(-91 -35)" strokeWidth="15" stroke={`url(#${getHashCode(colors.join('-'))})`} fill="none" fillRule="evenodd"/>
      </svg>
    )
  }
}

class HeartStroked extends Component {
  render() {
    const colors = this.props.gradientColors;
    return (
      <svg width="261" height="220" viewBox="0 0 261 220" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id={getHashCode(colors.join('-'))}>
            <stop stopColor={colors[0]} offset="0%"/>
            <stop stopColor={colors[1]} offset="100%"/>
          </linearGradient>
        </defs>
        <path d="M270.326 413.75c8.512 5.89 19.836 5.89 28.348 0 25.522-17.68 78.496-57.83 99.467-99.598 11.532-19.984 13.05-46.2-2.918-72.367-4.276-7.006-10.428-12.897-17.67-16.958-36.33-20.362-73.055-9.95-93.052 14.188-19.997-24.14-56.72-34.55-93.046-14.188-7.248 4.06-13.408 9.952-17.676 16.958-15.967 26.166-14.45 52.383-2.92 72.367 20.972 41.768 73.946 81.917 99.468 99.597z" transform="translate(-154 -206)" strokeWidth="15" stroke={`url(#${getHashCode(colors.join('-'))})`} fill="none" fillRule="evenodd"/>
      </svg>
    )
  }
}

class PureDiamondStroked extends Component {
  render() {
    const colors = this.props.gradientColors;
    return (
      <svg width="245" height="213" viewBox="0 0 245 213" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id={getHashCode(colors.join('-'))}>
            <stop stopColor={colors[0]} offset="0%"/>
            <stop stopColor={colors[1]} offset="100%"/>
          </linearGradient>
        </defs>
        <path d="M250.02 276.3l-99.68-131.27-.07-.1-.08-.08c-4.68-5.7-5-14.02-.8-20.1l23.03-33.56c2.9-4.28 7.5-6.7 12.4-6.7H338.1c4.9 0 9.5 2.42 12.4 6.7l23.05 33.5c4.18 6.1 3.86 14.4-.76 20.1l-.1.1-.08.1-99.68 131.24c-6.06 7.38-16.9 7.38-22.96 0z" transform="translate(-139 -77)"  strokeWidth="15" stroke={`url(#${getHashCode(colors.join('-'))})`} fill="none" fillRule="evenodd"/>
      </svg>
    )
  }
}

class Shapes extends Component {

  render() {

    const shapeCount = 8;
    let shape = '';

    switch (Math.floor(Math.random() * shapeCount)) {
      case 0: {
        shape = <RectStroked gradientColors={this.props.gradientColors}/>;
        break;
      }
      case 1: {
        shape = <CircleStroked gradientColors={this.props.gradientColors}/>;
        break;
      }
      case 2: {
        shape = <TriangleStroked gradientColors={this.props.gradientColors}/>;
        break
      }
      case 3: {
        shape = <DiamondStroked gradientColors={this.props.gradientColors}/>;
        break
      }
      case 4: {
        shape = <PolygonStroked gradientColors={this.props.gradientColors}/>;
        break
      }
      case 5: {
        shape = <HeartStroked gradientColors={this.props.gradientColors}/>;
        break
      }
      case 6: {
        shape = <PureDiamondStroked gradientColors={this.props.gradientColors}/>;
        break
      }
      case 7: {
        shape = <TriangleRightStroked gradientColors={this.props.gradientColors}/>;
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