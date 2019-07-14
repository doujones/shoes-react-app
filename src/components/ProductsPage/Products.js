import React from 'react';
import {ProductConsumer} from "../../Context"
import Title from "../Title"
import Product from "../Product"


export default function Products() {
  return <ProductConsumer>
  {value => {
    const {filteredProducts} = value;
    return <section className="py-5">
    <div className="container">
    <Title center title="Clothing and Shoe Sales"/>
    <div className="row-py-5">
    {filteredProducts.map(product => {
      return <Product key={product.id} product={product}/>
    })}
    </div>
    </div>
    </section>
  }}
  </ProductConsumer>
}
