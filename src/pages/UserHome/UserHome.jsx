import React from 'react';
import ProductDetails from '../../components/ProductDetails/ProductDetails'; 
import Transactions from '../../components/Transactions/Transactions';
import './UserHome.css';

const UserHome = () => {
  return (
    <div className="user-home">
      <nav className="navbar">
        <ul>
          <li><a href="/user-home/reports">Reports</a></li>
          <li><a href="/user-home/transactions">Transactions</a></li>
          <li><a href="/user-home/product-details">Product Details</a></li>
        </ul>
      </nav>

      <div className="content">
        <Transactions />
        <ProductDetails />
      </div>
    </div>
  );
};

export default UserHome;
