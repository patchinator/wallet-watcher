import './WalletItem.css';
import React from 'react';
import WalletDate from './WalletDate';
import Card from '../UI/Card';

const WalletItem = (props) => {

  return (
    <Card className='wallet-item'>
        <WalletDate date={props.date} />
        <h2>{props.title}</h2>
      <div className='wallet-item-price'>£{props.amount}</div>
    </Card>
  );
}

export default WalletItem;