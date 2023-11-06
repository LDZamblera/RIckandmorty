import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
`;

export const DetailContainer = styled.div`
  width: 70%;
  max-width: 900px;
  height: 340px;
  margin: 0 auto;
  display: flex;
  padding: 14px;
  background-color: white; /* Cambiado a un tono de negro más suave */
  box-shadow: 1px 6px 5px 2px rgba(0, 0, 0, 0.3);
`;

export const InfoContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  color: #ffffff; /* Cambiado a blanco para un mejor contraste */
  font-weight: bold;
`;

export const Circle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  ${(props) => {
    switch (props.status) {
      case "Alive":
        return css`
          background-color: #3dd705; /* Verde más brillante para una mejor visibilidad */
        `;
      case "Dead":
        return css`
          background-color: #f44141; /* Rojo más brillante para una mejor visibilidad */
        `;
      default:
        return css`
          background-color: #bbb; /* Un gris más claro para una mejor visibilidad */
        `;
    }
  }}
`;

export const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ffffff; /* Cambiado a blanco para un mejor contraste */
`

export const Parrafo = styled.p`
    text-align: center;
    margin-top: 5px;
    color: #ffffff; /* Cambiado a blanco para un mejor contraste */
`

export const ParrafoHead = styled(Parrafo)`
    font-size: 1.2rem;
    margin-top: 10px;
    color: #b0aeac; /* Un gris más claro para una mejor visibilidad */
    font-weight: 500;
`
