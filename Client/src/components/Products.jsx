import { useState, useEffect } from "react";
import styled from "styled-components";
import { latestProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat }) => {
  const [products, setProducts] = useState([]);
  console.log(cat);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        cat
          ? `http://localhost:3000/api/products?catogory=${cat}`
          : "http://localhost:3000/api/products"
      );
      setProducts(res.data);
      console.log(products);
    };
    getProducts();
  }, [cat]);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
