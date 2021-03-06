import React from 'react'
import Hero from "../components/Hero";
import {Link} from "react-router-dom"
import Services from "../components/HomePage/Services"
import Featured from "../components/HomePage/Featured"



export default function HomePage() {
  return (
    <>
    <Hero title="The Best Clothes in Show Business">
      <Link to="/products" className="main-link" style={{ margin: "2rem" }}>your gifts</Link>
    </Hero>
    <Services/>
    <Featured/>
    </>
  );
}
