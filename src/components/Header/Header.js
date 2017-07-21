/**
 * Created by ansarimofid on 20/07/17.
 */
import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

const Header = () => (
  <div className="uk-container">
    <header is uk-sticky="show-on-up: true;animation: uk-animation-slide-top;">
      <nav class="uk-navbar uk-navbar-container uk-navbar-transparent">
        <div class="uk-navbar-right uk-nav-center-sm">
          <ul class="uk-navbar-nav">
            <li><NavLink exact to='/' activeClassName="active">Home</NavLink></li>
            <li><NavLink to='/collection' activeClassName="active">Saved-Collection</NavLink></li>
            <li><NavLink class="uk-padding-remove-right" to='/about' activeClassName="active">About</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default Header