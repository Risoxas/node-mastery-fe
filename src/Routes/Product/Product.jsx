import React, { useState, useEffect } from 'react';
import BookCard from '../../Components/Card/BookCard';
import { useLocation } from 'react-router-dom';

import './Product.styles.scss';

export default function Products() {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className='container'>
      <div className='product-wrapper'>
        <BookCard key={product.id} product={{ ...product, single: true }} />
      </div>
    </div>
  );
}
