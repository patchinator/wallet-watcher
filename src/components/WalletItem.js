import './WalletItem.css';
import React from 'react';

const walletItem = () => {
  return (
    <div className='wallet-item'>
        <div className='wallet-item-date'>6th July 2021</div>
        <h2>Waitrose Shop</h2>
      <div className='wallet-item-price'>£39.93</div>
    </div>
  );
}

export default walletItem;