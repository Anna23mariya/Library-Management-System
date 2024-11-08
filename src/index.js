import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Auth from './pages/Login/Auth';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import UserHome from './pages/UserHome/UserHome';
import AdminHome from './pages/AdminHome/AdminHome'; 
import Maintenance from './pages/AdminHome/Maintenance'; 
import Reports from './pages/AdminHome/Reports'; 
import Transactions from './pages/AdminHome/Transactions'; 
import ProductDetails from './components/ProductDetails/ProductDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          
          <Route path="auth" element={<Auth />} />
          
          <Route path="user-home" element={<UserHome />}>
            <Route path="product-details" element={<ProductDetails />} />
            
          </Route>
          
          <Route path="admin-home" element={<AdminHome />}>
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="reports" element={<Reports />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="product-details" element={<ProductDetails />} /> 
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
