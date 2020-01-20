import React from 'react';

import './tCard.css';

function Header({ review }) {
  return (
    <blockquote>
      <figure>
        {review.name}
        <figcaption>{review.position}</figcaption>
      </figure>

      <p>“{review.comment}"</p>
    </blockquote>
  );
}

Header.displayName = 'Header';

export default Header;
