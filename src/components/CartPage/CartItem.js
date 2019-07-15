import React from 'react'
import {FaTrash, FaChevronCircleUp,FaChevronCircleDown} from "react-icons/fa"

export default function CartItem({CartItem, increment, decrement, removeItem
}) {
  const { id,title,price,count,total,image } = CartItem;
  return (
    <div className="row mt-5 mt-lg-0 text-uppercase text-center align-items-center">
    <div className="col-10 mx-auto col-lg-2 pb-2">
    <img src={image} width="61" className="img-fluid" alt="product"/>
    </div>
    <div className="col-10 mx-auto col-lg-2 pb-2">
    <span className="d-lg-none">product : </span>
    {title}
    </div>
    <div className="col-10 mx-auto col-lg-2 pb-2">
    <span className="d-lg-none">price : $</span>
    {price}
    </div>
    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
    <div className="d-flex justify-content-center">
    <div>
      <FaChevronCircleDown onClick={() => decrement(id)} className="cart-icon text-primary"/>
      <span className="text-title text-muted mx-3">{count}</span>
      <FaChevronCircleUp onClick={() => increment(id)} className="cart-icon text-primary"/>
    </div>
    </div>
    </div>
      <div className="col-10 mx-auto col-lg-2">
      <FaTrash className="text-danger cart-icon"
      onClick={()=> removeItem(id)}/>
      </div>
      <div className="col-10 mx-auto col-lg-2">
      <strong className="text-muted">item total : {total}</strong>
      </div>
    </div>
  )
}
