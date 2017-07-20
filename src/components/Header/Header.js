/**
 * Created by ansarimofid on 20/07/17.
 */
import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => (
  <div className="uk-container">
    <header is uk-sticky="show-on-up: true;animation: uk-animation-slide-top;">
      <nav class="uk-navbar uk-navbar-container uk-navbar-transparent">
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li class="uk-active"><Link to='/'>Home</Link></li>
            <li><Link to='/collection'>Collection</Link></li>
            <li><Link class="uk-padding-remove-right" to='/about'>About</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default Header