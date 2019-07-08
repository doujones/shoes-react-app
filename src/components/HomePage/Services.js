import React, { Component } from 'react'
import styled from "styled-components"
import {MdCardGiftcard, MdCreditCard} from "react-icons/md"
import {FaDollarSign} from "react-icons/fa"

export default class Services extends Component {
  state={
    services:[
      {
        id: 1,
        icon: <MdCardGiftcard/>,
        title: "free gift cards",
        text: "Loyal Customers can enter sweepstakes to win Gift Cards."
      },
      {
        id: 2,
        icon: <MdCreditCard/>,
        title: "Online Payments",
        text: "There's an easy way of making purchases, shop online."
      },
      {
        id: 3,
        icon: <FaDollarSign/>,
        title: "save money",
        text: "If there's any competitor, who have lower prices. Please call us"
      }
    ]
  }


  render() {
    return (
      <ServicesWrapper className="py-5">
      <div className="container">
      <div className="row">
      {this.state.services.map(item =>{
        return(
          <div className=".col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={item.id}>
          <div className="service-icon">
          {item.icon}
          </div>
          <div className="mt-3 text-capitalize">
          {item.title}
          </div>
          <div className="mt-3">
          {item.text}
          </div>
          </div>
        )
      })}
      </div>
      </div>
      </ServicesWrapper>
    )
  }
}

const ServicesWrapper = styled.section`
background: rgba(95,183,234,0.2);
.service-icon{
  font-size: 2.6rem;
  color: var(--mainBlack);
}
p{
  color: var(--mainBlack);
}
`