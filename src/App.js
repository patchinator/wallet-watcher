import './App.css';
import WalletItem from './components/WalletItem';

const App = () => {
  const newItem = [
    {
      title: 'Waitrose',
      amount: 39.99,
      date: new Date(2021, 7, 8)
    },
    {
      title: 'Hotel Chocolat',
      amount: 2.93,
      date: new Date(2021, 7, 9)
    },
    {
      title: 'Ikea',
      amount: 190.01,
      date: new Date(2021, 7, 9)
    },
    {
      title: 'Amazon',
      amount: 4.45,
      date: new Date(2021, 7, 10)}
  ];
  

  return (
    <div className="App">
      <h2>My wallet</h2>
      <WalletItem
        title={newItem[0].title}
        amount={newItem[0].amount}
        date={newItem[0].date}
      ></WalletItem>
      <WalletItem
        title={newItem[1].title}
        amount={newItem[1].amount}
        date={newItem[1].date}
      ></WalletItem>
      <WalletItem
        title={newItem[2].title}
        amount={newItem[2].amount}
        date={newItem[2].date}
      ></WalletItem>
      <WalletItem
        title={newItem[3].title}
        amount={newItem[3].amount}
        date={newItem[3].date}
      ></WalletItem>
    </div>
  );
}

export default App;
