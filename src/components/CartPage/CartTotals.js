import React from 'react'
import {ProductConsumer} from "../../Context/context"


export default function CartTotals(history) {
  return <div className="container">
  <div className="row">
  <ProductConsumer>
  {value=> {
    const{clearCart, cartSubTotal,cartTax,cartTotal} = value;
  return <div className="col text-title text-center my-4">
  <button className="btn btn-outline-danger text-capitalize mb-4" onClick={clearCart}>Delete Products</button>
    <h3>subTotal : ${cartSubTotal}</h3>
    <h3>tax : ${cartTax}</h3>
    <h3>Total : ${cartTotal}</h3>
    cartTotal={cartTotal}
    clearCart={clearCart}
    />
  </div>
  }}
  </ProductConsumer>
  </div>
  </div>
}
