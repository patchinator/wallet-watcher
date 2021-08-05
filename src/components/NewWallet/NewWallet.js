import React from 'react';
import './NewWallet.css';
import WalletForm from './WalletForm';

const NewWallet = (props) => {
  const saveWalletDataHandler = (enteredWalletData) => {
    const walletData = {
      ...enteredWalletData, 
      id: Math.random().toString()
    };
    props.onAddWallet(walletData);
  };

  return (
    <div className={'new-wallet'}>
      <WalletForm onSaveWalletData={saveWalletDataHandler} />
    </div>
  )
};

export default NewWallet;