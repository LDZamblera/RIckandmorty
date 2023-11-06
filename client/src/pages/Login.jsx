import { Form } from "../components/Form";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Login = ({ login, loginError }) => {
  return (
    <Container>
      <Form login={login} loginError={loginError} />
    </Container>
  );
};
