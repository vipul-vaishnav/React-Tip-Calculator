import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, color, roundedBottom }) => {
  return (
    <div
      className={`bg-${color} rounded-3xl ${
        roundedBottom ? '' : 'rounded-b-none sm:rounded-b-3xl'
      } sm:shadow-lg py-6 px-6`}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  color: 'white',
  roundedBottom: true,
};

Card.propTypes = {
  color: PropTypes.string,
  roundedBottom: PropTypes.bool,
};

export default Card;
