import React from 'react'
import { ProductConsumer } from "../Context/context";
export default function HomePage() {
  return (
    <>
     <ProductConsumer>
     {value => {
       console.log(value)
       return <h1>Will</h1>
     }}
     </ProductConsumer>
    </>
  )
}
