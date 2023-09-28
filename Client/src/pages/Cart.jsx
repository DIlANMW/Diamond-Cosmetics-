import React from "react";
import styled from "styled-components";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "./responser";
import { useSelector } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "5px" })}
`;

const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;

  ${mobile({ fontSize: "20px", marginBottom: "10px" })}
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  padding: 10px;
  border-radius: 5px;

  ${mobile({
    flexDirection: " column",
    alignItems: "flexStart",
    padding: "7px",
  })}
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 20px;

  ${mobile({ width: "90px", height: "90px", marginRight: "10px" })}
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.h2`
  font-weight: 600;
  margin: 0;
  ${mobile({ fontSize: "20px" })}
`;

const ProductDescription = styled.p`
  color: #777;
  margin: 5px 0;
  font-size: 15px;
`;
const ProductId = styled.p`
  color: #292929;
  margin: 5px 0;
`;

const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
`;

const Quantity = styled.span`
  font-size: 18px;
`;

const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  color: #e40404;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
`;

const Total = styled.div`
  text-align: right;
  font-size: 24px;
  font-weight: 700;
  margin: 20px;
`;

const CheckoutButton = styled.button`
  width: 20rem;
  padding: 20px;
  background-color: royalblue;
  color: white;
  font-weight: 600;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  display: block;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.products);
  return (
    <Container>
      <Navbar />
      <Title>Your Cart</Title>

      <Wrapper>
        {cart.products.map((product) => (
          <CartItem>
            <ProductImage src={product.product.img} alt="Product" />
            <ProductInfo>
              <ProductName>{product.product.title}</ProductName>
              <ProductId>Id:{product.product._id}</ProductId>
              <ProductDescription>{product.product.desc}</ProductDescription>
              <ProductPrice>${product.price}</ProductPrice>
            </ProductInfo>
            <QuantityContainer>
              <Quantity>Quantity: {product.quantity}</Quantity>
            </QuantityContainer>
            <RemoveButton>Remove</RemoveButton>
          </CartItem>
        ))}
        <Total>Total: ${cart.total}</Total>
        <CheckoutButton>Checkout Now</CheckoutButton>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
