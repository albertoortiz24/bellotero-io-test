import React from 'react';

import './tupple.css';
import Slider from '../Slider/Slider';

function Tupple({
  percent = 0, conceptL1, conceptL2, amount,
}) {
  return (
    <figure className='tupple'>
      <figcaption className='left'>{ conceptL1 }<br />
        { conceptL2 }
      </figcaption>
      <figcaption className='right'>
        <input type='text' value={amount} readOnly/>
      </figcaption>
      <Slider percent={percent}/>
    </figure>
  );
}

export default Tupple;
