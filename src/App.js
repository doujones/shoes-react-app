import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/DefaultPage.js";
import Cart from "./pages/CartPage.js";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
class App extends Component {
  render(){
    return (
      <>


    <Navbar/>
    <Sidebar/>
    <SideCart/>
    <Switch>
      <Route path="/" exact component= {Home}/>
      <Route path="/about" component= {About}/>
      <Route path="/contact" component= {Contact}/>
      <Route path="/products" exact component= {Products}/>
      <Route path="/products/:id" component= {SingleProduct}/>
      <Route Path="/cart" component= {Cart}/>
      <Route component= {Default}/>
    </Switch>
    <Footer/>
    </>
    );
  }
}

export default App;



