import React from 'react'
import {FaAlignJustify, FaCartPlus} from 'react-icons/fa'
import styled from 'styled-components'
import {ProductConsumer} from '../Context/context'


export default function Navbar() {
  return (<ProductConsumer>
  {value => {
    const{cartItems, handleSidebar, handleCart} = value
    return <NavWrapper>
    <div className="nav-center">
    <FaAlignJustify className="nav-icon" onClick={handleSidebar}/>
    <p className="Boswell">Boswell's clothing store</p>
    <div className="nav-cart">
    <FaCartPlus className="nav-icon" onClick={handleCart}>
    </FaCartPlus>
    <div className="cart-items">{cartItems}</div>
    </div>
    </div>
    
    </NavWrapper>
  }}
  </ProductConsumer>
) 
}

const NavWrapper = styled.nav`
z-index: 1;
position: sticky;
top:0;
position: -webkit-sticky;
width: 100%;
padding: 1rem 1.5rem;
background: var(--mainBlue);
border-bottom: 3px solid var(--primaryColor);
.nav-center{
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1170px;
  margin: 0 auto;
}
.nav-icon{
  font-size: 1.5rem;
  cursor: pointer;
}
.Boswell{
  font-size: 2rem;
  color: white;
  text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);
}
.nav-cart{
  position: relative;
}
.cart-items{
  background: var(--mainRed);
  color: var(--mainWhite);
  font-size: 0.8rem;
  position: absolute;
  top: -8px;
  right: -8px;
  padding: 0 5px;
  border-radius: 50%;
}
`;
