import React from "react";
import styled from "styled-components";
import { BsSearch, BsBag } from "react-icons/bs";
import { mobile } from "../pages/responser";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05)
`;

const Badge = styled.span`
  position: absolute;
  background-color: #1100ff;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  text-align: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Search = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Shopy</Logo>
        </Left>
        <Center>
          <Search>
            <Input placeholder="Search" />
            <BsSearch style={{ color: "gray", fontSize: 16 }} />
          </Search>
        </Center>
        <Right>
          <Menu>Register</Menu>
          <Menu>Sign in</Menu>
          <Menu>
            <Link to="/cart">
              <BsBag style={{ color: "gray", fontSize: 20 }} />
              <Badge>{quantity}</Badge>
            </Link>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
