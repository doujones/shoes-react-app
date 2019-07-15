import React from 'react'
import CartSection from "../components/CartPage"
import Hero from "../components/Hero"
import boswellBcg from "../images/shoe9.jpg"


export default function CartPage() {
  return (
    <>
      <Hero img={boswellBcg}/>
      <CartSection/>
    </>
  )
}
