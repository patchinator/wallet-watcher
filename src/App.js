import './App.css';
import Wallets from './components/wallets/Wallets';
import NewWallet from './components/NewWallet/NewWallet';

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
      <NewWallet />
      <Wallets newItem={newItem}/>
    </div>
  )
};

export default App;
