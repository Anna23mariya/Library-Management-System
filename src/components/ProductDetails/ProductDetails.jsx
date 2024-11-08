import React from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
  const products = [
    { codeFrom: '1001', codeTo: '1005', category: 'Fiction' },
    { codeFrom: '2001', codeTo: '2005', category: 'Science' },
    { codeFrom: '3001', codeTo: '3005', category: 'History' },
    
  ];

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Code No From</th>
            <th>Code No To</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="code-column">{product.codeFrom}</td>
              <td className="code-column">{product.codeTo}</td>
              <td className="category-column">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
