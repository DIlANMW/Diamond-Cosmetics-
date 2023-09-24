import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
