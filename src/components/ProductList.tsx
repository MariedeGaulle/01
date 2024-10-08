import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-red-600 font-bold">¥{product.price}</p>
            </div>
          </Link>
          <button className="w-full bg-red-600 text-white py-2 px-4 hover:bg-red-700 transition-colors">
            加入购物车
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;