import React from 'react';
import './WalletDate.css';

const WalletDate = (props) => {
  const timeOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="wallet-date">
      {props.date.toLocaleString("en-US", timeOptions)}
    </div>
  );
}

export default WalletDate;