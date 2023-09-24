import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../pages/responser";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "100%", margin: "10px 0", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;

const Option = styled.option``;

const ListedProducts = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  return (
    <Container>
      <Navbar />
      <Title>{cat}</Title>
      <FilterDiv>
        <Filter></Filter>
      </FilterDiv>
      <Products cat={cat} />
      <Footer />
    </Container>
  );
};

export default ListedProducts;
