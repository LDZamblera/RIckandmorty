import styled from "styled-components";

export const InputStyle = styled.input`
  border: ${(props) => (props.error ? "1px solid #f87171" : "1px solid #fff")};
  outline: none;
  border-radius: 8px;
  padding: 10px 6px;
  background-color: #3c3e44;
  color: #fff;
  &::placeholder {
    color: #fff;
    opacity: 0.6;
  }
`;

export const ButtonStyle = styled.button`
  height: 37px;
  border: none;
  color: ${(props) => (props.primary ? "#fff" : "#3c3e44")};
  padding: 4px 8px;
  background-color: ${(props) => (props.primary ? "#09f" : "#fff")};
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;
export const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 15px;
`;

export const InputContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;