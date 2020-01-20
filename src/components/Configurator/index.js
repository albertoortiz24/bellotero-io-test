import React, { Component } from 'react';
import { connect } from 'react-redux';

import './configurator.css';
import { actionTypes } from './configuratorEpic';

import Tupple from '../Tupple/Tupple';

class Configurator extends Component {
  componentDidMount() {
    const { config, dispatch } = this.props;

    if (!config.title) dispatch({ type: actionTypes.FETCH_CONFIG });
  }

  render() {
    const { config } = this.props;

    return (
      <section className='configurator'>
        <article className='with-margin'>
          <h1>Save More With</h1>
          <h1>Bellotero.io</h1>
          <p>{config.description}</p>
        </article>
        <article>
          <Tupple
            percent='30'
            conceptL1='Monthly'
            conceptL2='ingredient spending'
            amount='36.211'
          />
          <Tupple
            percent='80'
            conceptL1='Full-time employees that'
            conceptL2='process invoices'
            amount='8'
          />
          <footer>
            <figure>
              8.611<br />
              <figcaption>Estimated cost food savings</figcaption>
            </figure>
            <figure>
              36.211<br />
              <figcaption>Your estimated annual savings</figcaption>
            </figure>
          </footer>
        </article>
      </section>
    );
  }
}

Configurator.displayName = 'Configurator';

export default connect(
  ({ config }) => ({ config }),
  null,
)(Configurator);
