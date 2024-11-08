import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetails from '../../components/ProductDetails/ProductDetails'; 
import Transactions from '../../components/Transactions/Transactions'; 
import './AdminHome.css';

const AdminHome = () => {
  return (
    <div className="admin-home">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/admin-home/maintenance">Maintenance</Link>
          </li>
          <li>
            <Link to="/admin-home/reports">Reports</Link>
          </li>
          <li>
            <Link to="/admin-home/transactions">Transactions</Link>
          </li>
          <li>
            <Link to="/admin-home/product-details">Product Details</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Transactions />
        <ProductDetails />
      </div>
    </div>
  );
};

export default AdminHome;
