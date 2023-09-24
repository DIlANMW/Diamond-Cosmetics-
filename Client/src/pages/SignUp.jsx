import styled from "styled-components";
import { mobile } from "./responser";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafbfc;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 30px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: royalblue;
  color: white;
  cursor: pointer;
  margin: 20px 0px;
  border-radius: 10px;
`;

const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create a Account</Title>
        <Form>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Button type="submit">Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
