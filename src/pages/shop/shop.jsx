import React from 'react'
import { PRODUCTS } from '../../product'
import Product from './product'
import './shop.css'

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shop-title'>
            <h1>Shopping Cart</h1>
        </div>
        <div className='products'>
          {""}
          {PRODUCTS.map((product)=>(
            <Product data={product}/>
          ))}
        </div>
    </div>
  )
}

export default Shop
