import Card from '../UI/Card';
import React, { useState } from 'react';
import WalletFilter from './WalletFilter';
import WalletItem from './WalletItem';
import './Wallets.css';

const Wallets = (props) => {
  const [filterYear, setFilterYear] = useState('2021');
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className={"wallets"}>
        <WalletFilter selected={filterYear} onFilterChange={filterChangeHandler}></WalletFilter>
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
    </div>
  );
};

export default Wallets;