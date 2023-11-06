import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  font-size: 40rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

export default function NotFound() {
  return <Container>404</Container>;
}
