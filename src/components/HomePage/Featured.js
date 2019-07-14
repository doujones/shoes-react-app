import React from 'react';
import Product from "../../components/Product"
import Title from "../Title";
import {ProductConsumer} from "../../Context"
import {Link} from "react-router-dom";


export default function Featured() {
  return (
    <section className="py-5">
<div className="container">
<Title title="featured products" center="true"/>
<div className="row my-5">
<ProductConsumer>
{value =>{
  const {featuredProducts} = value;

  return featuredProducts.map(product => (<Product key={product.id} product={product}></Product>))
}}
</ProductConsumer>
</div>
<div className="row mt-5">
<div className="col text-center">
<Link to="/products" className="main-link">
Clothing & Shoe Sales
</Link>
</div>
</div>
</div>
</section>
  )
}
