import './WalletFilter.css'
import React from 'react';

const WalletFilter = (props) => {
  const filterHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className='wallet-filter'>
      <label>Filter by year</label>
      <select value={props.selected} onChange={filterHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default WalletFilter;