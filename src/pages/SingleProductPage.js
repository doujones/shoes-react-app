import React from 'react'
import {Link} from "react-router-dom";
import Hero from "../components/Hero";
import singleImage from "../images/shoe8.jpg"
import {ProductConsumer} from "../Context/context"

export default function SingleProductPage() {
  return (
    <>
      <Hero img={singleImage} title="One Product"/>
      <ProductConsumer>
      {value =>{
        const {singleProduct, addToCart, loading } = value;
        if(loading){
          console.log("Hello Everybody");
         return <h1>Product loading...</h1>;
        }
        const {
        company,
        description,
        id,
        price,
        title,
        image
      } = singleProduct;
        return (
          <section className="py-5">
        <div className="container">
        <div className="row">
        <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
        <img src={`../${image}`} alt="One Product" className="img-fluid"/>
        </div>
        <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
        <h5 className="text-title mb-4">model : {title}</h5>
        <h5 className="text-capitalize text-muted mb-4">
          company : {company}
        </h5>
        <h5 className="text-main text-capitalize mb-4">
        price : ${price}
        </h5>
        <p className="text-capitalize mt-3">
          Information :
        </p>
        <p>{description}</p>
        <button type="button" className="main-link" style={{margin: "0.75rem"}} onClick={()=>
        addToCart(id)
        }>  add Merchandise 
        </button>
        <Link to="/products" className="main-link"
        style={{ margin: "0.75rem" }}>
          previously
        </Link>
        </div>
        </div>
        </div>
        </section>
      );
      }}
      </ProductConsumer>
    </>
  );
}
