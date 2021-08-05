import './WalletItem.css';
import React, {useState} from 'react';
import WalletDate from './WalletDate';
import Card from '../UI/Card';

const WalletItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('updated!');
    console.log(title);
  };

  return (
    <Card className='wallet-item'>
        <WalletDate date={props.date} />
        <h2>{title}</h2>
      <div className='wallet-item-price'>£{props.amount}</div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}

export default WalletItem;