import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.css';
import logo from '../../assets/bellotero.svg';

function Header({ menu, location }) {
  return (
    <header>
      <nav role='navigation' aria-label='Principal'>
        <img src={logo} alt='Bellotero.io-test'/>
        <ul>
          {
            menu.items.map(route => (
              <li key={route.text} className={location.pathname === `/${route.route}` ? 'active' : ''}>
                <Link to={route.route}>{route.text}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

Header.displayName = 'Header';


export default withRouter(connect(({ menu }) => ({ menu }),null,)(Header));
