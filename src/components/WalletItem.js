import './WalletItem.css';
import React from 'react';
import WalletDate from './WalletDate';

const walletItem = (props) => {
  return (
    <div className='wallet-item'>
        <WalletDate date={props.date} />
        <h2>{props.title}</h2>
      <div className='wallet-item-price'>£{props.amount}</div>
    </div>
  );
}

export default walletItem;