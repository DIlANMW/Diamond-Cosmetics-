import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../pages/responser";

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
  return (
    <Container>
      <Navbar />
      <Title>All Products</Title>
      <FilterDiv>
        <Filter>
          <FilterText>Sort Based:</FilterText>
          <Select>
            <Option value="newest">Newest</Option>
            <Option value="priceAsc">Price (asc)</Option>
            <Option value="priceDesc">Price (desc)</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option value="" disabled selected>
              Color
            </Option>
            <Option value="white">White</Option>
            <Option value="black">Black</Option>
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="green">Green</Option>
          </Select>
          <Select>
            <Option value="" disabled selected>
              Size
            </Option>
            <Option value="xs">XS</Option>
            <Option value="s">S</Option>
            <Option value="m">M</Option>
            <Option value="l">L</Option>
            <Option value="xl">XL</Option>
          </Select>
        </Filter>
      </FilterDiv>
      <Products />
      <Footer />
    </Container>
  );
};

export default ListedProducts;
