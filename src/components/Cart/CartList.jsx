import React from 'react'
import CartItem from "./CartItem"

export default function CartList(props) {
    const cart = props.value.cart;
    console.log(props,cart);
    

  return (
    <div className='container-fluid'>
        {cart.map(item => {
            return <CartItem  key={item.id} item ={item} value =
            {props}/>;
        })}
    </div>
  )
}
