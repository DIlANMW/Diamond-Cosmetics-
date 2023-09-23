import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  background-image: url("/images/cosmetics-on-pink-table.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 5.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 2.25rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const HeroButton = styled.button`
  background-color: #ffffff;
  color: lightgray;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 1rem 1.9rem;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #999898;
    transform: scale(1.05);
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroTitle>Explore Quality</HeroTitle>
      <HeroDescription>Discover all products.</HeroDescription>
      <HeroButton>Shop Now</HeroButton>
    </HeroWrapper>
  );
};

export default Hero;
