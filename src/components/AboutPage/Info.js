import React from 'react'
import Title from "../Title"
import aboutBcg from "../../images/shoe3.jpeg"
import secondBcg from "../../images/shoe4.jpg"

export default function Info() {
  return (
      <section className="py-5">
      <div className="container">
      <div className="row">
      <div className="col-10 mx-auto col-md-6 my-3">
      <img src={secondBcg} className="img-fluid img-thumbnail" alt="Clothes-Example"
      style={{ background: "var(--mainWhite)"}}
      />
      </div>
      <div className="col-10 mx-auto col-md-6 my-3">
      <img src={aboutBcg} className="img-fluid img-thumbnail" alt="Clothes-Example"
      style={{ background: "var(--mainWhite)"}}
      />
      <Title title="about my store"/>
      <p className="text-lead text-muted my-3">I am a clothes & Shoes Retailer, who has been in the clothes industry for 36 years. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, similique!</p>
      <p className="text-lead text-muted my-3">Please tell a friend, a family member or co-worker about Boswell's Clothing Store. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, similique!</p>
      <button
      className="main-link"
      type="button"
      style={{ marginTop: "2.3rem" }}
      >
      more insight</button>
      </div>
      </div>
      </div>
      
      </section>
  )
}

