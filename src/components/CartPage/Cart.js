import React from 'react'
import Title from "../Title"
import CartColumns from "./CartColumns"
import CartList from "./CartList"


export default function Cart() {
  return (
    <section className="py-5">
    <div className="container">
    <Title title="Your Merchandise" center/>
    </div>
      <CartColumns/>
      <CartList/>
    </section>
  )
}
