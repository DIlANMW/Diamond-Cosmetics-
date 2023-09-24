import styled from "styled-components";
import { mobile } from "../pages/responser";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsTelephoneFill,
  BsGlobe,
} from "react-icons/bs";

import { GiCage } from "react-icons/gi";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const Social = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #000000;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const Contact = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Diamond</Logo>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Description>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <Contact>
          <GiCage style={{ marginRight: "10px" }} /> 1234 Elm Street, Anytown,
          USA
        </Contact>
        <Contact>
          <BsTelephoneFill style={{ marginRight: "10px" }} /> +1 234 56 78
        </Contact>
        <Contact>
          <BsGlobe style={{ marginRight: "10px" }} /> contact@diamondcos.com
        </Contact>
        <Social>
          <SocialIcon>
            <BsFacebook />
          </SocialIcon>
          <SocialIcon>
            <BsInstagram />
          </SocialIcon>
          <SocialIcon>
            <BsTwitter />
          </SocialIcon>
          <SocialIcon>
            <BsPinterest />
          </SocialIcon>
        </Social>
      </Right>
    </Container>
  );
};

export default Footer;
