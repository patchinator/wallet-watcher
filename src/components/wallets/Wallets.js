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

  const filteredWallets = props.newItem.filter(walletItem => {
    return walletItem.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className={"wallets"}>
        <WalletFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        {filteredWallets.length === 0 ? (
          <p>No items found.</p>
        ) : (
          filteredWallets.map((wallet) => (
            <WalletItem
              key={wallet.id}
              title={wallet.title}
              date={wallet.date}
              amount={wallet.amount}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Wallets;