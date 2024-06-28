import React from 'react';

const Cart = ({ items }) => {
  return (
    <div>
      <div>
        <h2>Корзина:</h2>
        {items.map((el) => (
          <div key={el.id}>
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
