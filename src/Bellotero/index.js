import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Loading from '../components/Loading';
import Home from '../components/Home';
import Configurator from '../components/Configurator';
import Testimonials from '../components/Testimonials';

import { actionTypes } from './menuEpic';
import './bellotero.css';

export class Bellotero extends Component {
  componentDidMount() {
    const { menu, dispatch } = this.props;

    if (!menu.items.length) dispatch({ type: actionTypes.FETCH_MENU });
  }

  render() {
    const { menu } = this.props;

    return menu.items.length ? (
      <Router>
        <Header/>
        <Switch>
          <Route path="/page-1" component={Testimonials} />
          <Route path="/page-2" component={Configurator} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    ) : <Loading />;
  }
}

export default connect(
  ({ menu }) => ({ menu }),
  null,
)(Bellotero);
