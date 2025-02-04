import React from 'react'
import {ShopContext} from '../../context/shop-context'
import { useContext } from 'react';
export const Product = (props) => {
    const {id,productName,price,productImage}=props.data;
    const {addToCart,cartItems}=useContext(ShopContext);
    
    const cartItemAmount=cartItems[id];
    return (
    <div className='product'>
      <img src={productImage}/>
      <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p>
            <b>${price}</b>
        </p>
      </div>
      <button className='addToCartBttn' onClick={()=>addToCart(id)}>
        Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
      </button>
    </div>
  )
}

export default Product
