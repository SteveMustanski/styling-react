import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function getPrevClassName(props) {
  return classnames('sr__nav__btn', 'sr__nav__btn--prev', {
    'sr__nav__btn--hidden': !props.hasPrevious,
  });
}

function getNextClassName(props) {
  return classnames('sr__nav__btn', 'sr__nav__btn--next', {
    'sr__nav__btn--hidden': !props.hasNext,
  });
}

function Nav(props) {
  return (
    <div className='sr__nav'>
      <button className={getPrevClassName(props)} onClick={props.onPrevious}>
        &#10094;
      </button>
      <button className={getNextClassName(props)} onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool,
};

export default Nav;
