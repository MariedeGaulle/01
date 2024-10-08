import React from 'react'
import ProductList from '../components/ProductList'

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">欢迎来到京东商城</h1>
      <ProductList />
    </div>
  )
}

export default HomePage