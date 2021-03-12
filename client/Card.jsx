import React from 'react';
import $ from 'jquery';

var Card = ({ card }) => {
  return (
    <div
      className="card"
      onMouseEnter={(e) => {
        $(e.currentTarget).css({
          'border-color': 'black',
        });
      }}
      onMouseLeave={(e) => {
        $(e.currentTarget).css({
          'border-color': 'white',
        });
      }}
    >
      {card.item}
    </div>
  );
};

export default Card;
