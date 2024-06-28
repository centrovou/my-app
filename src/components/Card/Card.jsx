import React from 'react';

const Card = ({ title, addToCard }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <button onClick={() => addToCard()}>Добавить</button>
    </div>
  );
};

export default Card;
