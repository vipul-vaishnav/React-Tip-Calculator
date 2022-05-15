import React from 'react';

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

export default Card;
