import React, { useState } from 'react';
import './NewWallet.css';
import WalletForm from './WalletForm';

const NewWallet = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveWalletDataHandler = (enteredWalletData) => {
    const walletData = {
      ...enteredWalletData, 
      id: Math.random().toString()
    };
    props.onAddWallet(walletData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className={"new-wallet"}>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new item</button>
      )}
      {isEditing && (
        <WalletForm
          onCancel={stopEditingHandler}
          onSaveWalletData={saveWalletDataHandler}
        />
      )}
    </div>
  );
};

export default NewWallet;