import React, { useState } from 'react';
import $ from 'jquery';
import Modal from './Modal.jsx';
import App from './App.jsx';

var Card = ({ card, globalModalStatus, toggleGlobalModalStatus }) => {
  let [localModalStatus, setLocalModalStatus] = useState(false);

  let syncModelStatus = () => {
    if (!globalModalStatus && !localModalStatus) {
      setLocalModalStatus(!localModalStatus);
      toggleGlobalModalStatus();
    } else if (localModalStatus && globalModalStatus) {
      toggleGlobalModalStatus();
      setLocalModalStatus(!localModalStatus);
    }
  };

  return (
    <div>
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
        onClick={syncModelStatus}
      >
        {card.item}
      </div>
      <Modal
        open={localModalStatus}
        children={card.item}
        toggleModal={syncModelStatus.bind(this)}
      ></Modal>
    </div>
  );
};

export default Card;
