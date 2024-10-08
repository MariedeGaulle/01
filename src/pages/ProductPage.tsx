import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return <div className="container mx-auto py-8">商品未找到</div>
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto object-cover rounded-lg" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-red-600 text-2xl font-bold mb-4">¥{product.price}</p>
          <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition-colors">
            加入购物车
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage