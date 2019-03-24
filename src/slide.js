import PropTypes from 'prop-types';
import React from 'react';

function Slide(props) {
  return (
    <article style={props.style} className='sr__slide'>
      <img src={props.image} alt={props.title} />
      <footer className='sr__slide__footer'>
        <h2 className='sr__slide__title'>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  );
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Slide;
