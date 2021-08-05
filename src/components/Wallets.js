import React from 'react';
import WalletItem from './WalletItem';
import './Wallets.css';
import Card from './Card';

const Wallets = (props) => {
  return (
    <Card className={'wallets'}>
      <WalletItem
        title={props.newItem[0].title}
        amount={props.newItem[0].amount}
        date={props.newItem[0].date}
      ></WalletItem>
      <WalletItem
        title={props.newItem[1].title}
        amount={props.newItem[1].amount}
        date={props.newItem[1].date}
      ></WalletItem>
      <WalletItem
        title={props.newItem[2].title}
        amount={props.newItem[2].amount}
        date={props.newItem[2].date}
      ></WalletItem>
      <WalletItem
        title={props.newItem[3].title}
        amount={props.newItem[3].amount}
        date={props.newItem[3].date}
      ></WalletItem>
    </Card>
  );
};

export default Wallets;