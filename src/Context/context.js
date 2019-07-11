import React, { Component } from "react"
import {linkData} from "./linkData";
import {socialData} from "./socialData";
import  { items } from "./ProductData"


const ProductContext = React.createContext();


class ProductProvider extends Component{
state = {
  sidebarOpen: false,
  cartOpen: false,
  links: linkData,
  socialIcons: socialData,
  cart: [],
  cartItems: 0,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  singleProduct: {},
  loading: false
};

componentDidMount(){


  this.setProducts(items);
}

setProducts = (products) => {
  let storeProducts = products.map(item =>{
    const {id} = item.sys;
    const product = {id,...item.fields};
    return product
  })
 let featuredProducts = storeProducts.filter(item => item.featured === true);
this.setState({
  storeProducts,
  filteredProducts:storeProducts,
  featuredProducts, 
  cart: this.getStorageCart(),
  singleProduct:this.getStorageProduct(),
  loading: false
})
};

getStorageCart = () => {
  return [];
}
getStorageProduct = () => {
  return [];
};
getTotals = () => {};

addTotals =() => {};

syncStorage = () => {
  
}

addToCart = (id) => {
  console.log(id);
}

setSingleProduct = (id) => {

}



// handle horizontalbar
handleSidebar = () => {
  this.setState({ sidebarOpen: !this.state.sidebarOpen });
};
// handle cart
handleCart = () => {
  this.setState({ cartOpen: !this.state.sidebarOpen }) ;
};
// close cart
closeCart = () => {
  this.setState({ cartOpen: false });
};
// open cart
openCart = () => {
  this.setState({ cartOpen: true });
};

  render() {
    return (
    <ProductContext.Provider value={{
      ...this.state,
      handleSidebar : this.handleSidebar,
      handleCart : this.handleCart,
      closeCart : this.closeCart,
      openCart : this.openCart,
      addToCart: this.addToCart,
      setSingleProduct: this.setSingleProduct
    }}>
    {this.props.children}
    </ProductContext.Provider>
    );
  }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };