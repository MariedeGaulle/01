import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-red-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-red-200 transition-colors">京东商城</Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索商品"
              className="py-2 px-4 rounded-full text-black"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" size={20} />
          </div>
          <ShoppingCart className="cursor-pointer hover:text-red-200 transition-colors" />
          <User className="cursor-pointer hover:text-red-200 transition-colors" />
        </div>
      </div>
    </header>
  );
};

export default Header;