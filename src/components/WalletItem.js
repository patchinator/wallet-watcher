import './WalletItem.css';
import React from 'react';

const walletItem = (props) => {
  return (
    <div className='wallet-item'>
        <div className='wallet-item-date'>{props.date.toISOString()}</div>
        <h2>{props.title}</h2>
      <div className='wallet-item-price'>£{props.amount}</div>
    </div>
  );
}

export default walletItem;