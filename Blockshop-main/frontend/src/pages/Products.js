import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [viewMode, setViewMode] = useState('card'); 
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products.</div>;

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setViewMode('card')}>Card View</button>
        <button onClick={() => setViewMode('list')}>List View</button>
      </div>

      <div style={{ display: 'flex', flexDirection: viewMode === 'list' ? 'column' : 'row', gap: '20px' }}>
        {products.map((product) => (
          viewMode === 'card' ? (
            <ProductCard key={product.id} product={product} />
          ) : (
            <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
              <h3>{product.name}</h3>
              <p>{product.price} ETH</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Products;