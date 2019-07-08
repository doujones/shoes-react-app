import React from 'react'
import Hero from "../components/Hero"
import shoe1 from "../images/shoe1.jpg"
import {Link} from "react-router-dom"


export default function Default() {
  return (
    <>
      <Hero img={shoe1} title="404" max="true">
      <h2 className="text-uppercase">What you're looking for isn't here</h2>
      <Link to="/" className="main-link" style={{marginTop: "2.1rem"}}>
      return home
    </Link>
      </Hero>
     
    </>
  )
}
