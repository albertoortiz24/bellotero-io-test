import React, { Component } from 'react';
import { connect } from 'react-redux';

import TCard from '../TCard/TCard';
import Loading from '../Loading';

import { actionTypes } from './testimonialsEpic';
import './testimonials.css';

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIdx: 0,
      displayTime: 5000,
    };
  }

  componentDidMount() {
    const { testimonials, dispatch } = this.props;

    if (!testimonials.title) dispatch({ type: actionTypes.FETCH_TESTIMONIALS });
  }

  handleSliderSeek = (e) => {
    e.persist();

    const cmd = e.target.dataset.cmd || 'next';
    let { activeIdx } = this.state;
    const { testimonials: { reviews } } = this.props;

    if (reviews && reviews.length > 1) {
      switch (cmd) {
        case 'next':
          activeIdx = activeIdx >= (reviews.length - 1) ? 0 : activeIdx + 1;
          break;

        default:
          activeIdx = activeIdx <= 0 ? (reviews.length - 1) : activeIdx - 1;
          break;
      }

      this.setState(() => ({ activeIdx }));
    }
  };

  render() {
    const { activeIdx } = this.state;
    const { testimonials: { reviews, title } } = this.props;

    if (!title) return <Loading />;

    const review = reviews[activeIdx];

    return (
      <section className='testimonials'>
        <h1>{title}</h1>
        <article>
          <TCard review={review}/>
          <div className='controls'>
            <div>{activeIdx + 1} <i>/</i> {reviews.length}</div>
            <input type='button' value='<' onClick={this.handleSliderSeek} data-cmd='back'/>
            <input type='button' value='>' onClick={this.handleSliderSeek} data-cmd='next'/>
          </div>
        </article>
      </section>
    );
  }
}

Testimonials.displayName = 'Testimonials';

export default connect(
  ({ testimonials }) => ({ testimonials }),
  null,
)(Testimonials);
