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
        <WalletFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        {props.newItem.map((wallet) => (
        <WalletItem
          title={wallet.title}
          date={wallet.date}
          amount={wallet.amount}
        />
        ))}
      </Card>
    </div>
  );
};

export default Wallets;