import React from 'react';
import Card from './Card.jsx';

var CardList = ({ cards, toggleGlobalModalStatus, globalModalStatus }) => {
  let renderCards = cards.map((card, index) => {
    return (
      <Card
        card={card}
        toggleGlobalModalStatus={toggleGlobalModalStatus}
        globalModalStatus={globalModalStatus}
        key={index}
      />
    );
  });
  return <div className="card-list">{renderCards}</div>;
};

export default CardList;
