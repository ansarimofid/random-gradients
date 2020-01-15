/**
 * Created by ansarimofid on 20/07/17.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import './Header.css'

const Header = () => (
  <div className="uk-container header">
    <header is uk-sticky="show-on-up: true;animation: uk-animation-slide-top;">
      <nav class="uk-navbar uk-navbar-container uk-navbar-transparent">
        <div className="uk-navbar-left">
          <div className="title-deco gradient-text uk-navbar-item uk-logo uk-padding-remove-left">
              <Link to="/"><span className="uk-visible@s">Random Gradients</span><span className="uk-hidden@s">rG</span></Link> 
          </div>
        </div>
        <div class="uk-navbar-right uk-nav-center-sm">
          <ul class="uk-navbar-nav">
            <li><NavLink to='/collection' activeClassName="active">Saved-Collection</NavLink></li>
            <li><NavLink class="uk-padding-remove-right" to='/about' activeClassName="active">About</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default Header