import React from 'react';
import './WalletForm.css';

const WalletForm = () => {
  return (
    <form>
      <div className={'new-wallet-controls'}>
        <div className={'new-wallet-control'}>
          <label>Title</label>
          <input type="text"/>
        </div>
        <div className={'new-wallet-control'}>
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' />
        </div>
        <div className={'new-wallet-control'}>
          <label>Date</label>
          <input type="date" min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div>
        <button type='submit'>Add item</button>
      </div>
    </form>
  );
};

export default WalletForm;