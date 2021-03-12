import React from 'react';
import Card from './Card.jsx';

var CardList = ({ cards }) => {
  let renderCards = cards.map((card, index) => {
    return <Card card={card} key={index} />;
  });
  return <div className="card-list">{renderCards}</div>;
};

export default CardList;
