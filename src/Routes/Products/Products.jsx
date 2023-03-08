import React, { useState, useEffect } from 'react';
import BookCard from '../../Components/Card/BookCard';

import './Products.styles.scss';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const config = {
      method: 'GET',
      mode: 'cors',
    };
    fetch('http://localhost:3000/products/all', config)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='container'>
      <div className='card-wrapper'>
        {products.map((product) => (
          <BookCard key={product.id} product={{ ...product, single: false }} />
        ))}
      </div>
    </div>
  );
}
