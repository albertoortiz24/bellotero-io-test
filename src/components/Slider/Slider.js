import *as  React from 'react';
//import {Slider} from "@blueprintjs/core";

import './slider.css';

function Slider({ percent = 0 }) {
  return (
    <svg className="svg-slider" height='30px'>
      <defs>
        <filter id="shadow">
          <feDropShadow dx="-0.5" dy="1" stdDeviation="0.75"/>
        </filter>
      </defs>
      <line
        x1="0%"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke="#f0f2ff"
        strokeWidth="4"
      />
      <line
        x1="0%"
        y1="50%"
        x2={`${percent}%`}
        y2="50%"
        stroke="#071eb3"
        strokeWidth="4"
      />
      <circle className='thumb' r="8" cx={`${percent}%`} cy="50%" fill="#071eb3" filter="url(#shadow)"></circle>
      <circle className='thumb' r="4" cx={`${percent}%`} cy="50%" fill="#f0f2ff"></circle>
    </svg>
  );
}

export default Slider;