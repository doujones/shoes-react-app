import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaSearch, FaCartPlus } from "react-icons/fa"
import { ProductConsumer } from "../Context/context"


export default function Product({product}) {
  return <ProductConsumer>
  {value => {
    const {addToCart, setSingleProduct} = value;
    return (
      <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-8 col-lg-4 my-3">
      <div className="card">
      <div className="img-container">
      <img 
      src={product.image} 
      className="card-img-top p-5" 
      alt="product" style={{ height: "320px" }}/>
      <div className="product-icons">
      <Link to={`/products/${product.id}`} 
      onClick={() => setSingleProduct(product.id)}>
        <FaSearch className="icon"/>
      </Link>
      <FaCartPlus className="icon" onClick={() => addToCart(product.id)}/>
      </div>
      </div>
      <div className="card-body d-flex justify-content-between"></div>
      <p className="mb-0 text-center text-uppercase">{product.title}</p>
      <p className="mb-0 text-center text-uppercase">${product.price}</p>
      </div>
      </ProductWrapper>
    )
  }}
  </ProductConsumer>
  
}
const ProductWrapper = styled.div`
.card {
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
  transition: var(--mainTransition);
  height: 100%;
}
.card:hover{
  8px 10px 5px 0px rgba(0,0,0,0.5);
  cursor: pointer;
}
.card-img-top{
  transition: var(--mainTransition);
}
.card:hover .card-img-top{
  transform: scale(1.15);
  opacity: 0.2;
}
.img-container{
  position: relative;
}
.product-icons{
  transition: var(--mainTranstion);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
 
}

.icon, .mb-0{
  font-size: 2.5rem;
  margin: 1rem;
  padding: 0.5rem;
  color: var(--primaryColor);
  background: var(--mainBlack);
  border-radius: 0.5rem;

}
.card:hover .product-icons {
  opacity: 1;
}
.card-body{
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase
}
`;