import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
`;

export const FormStyle = styled.form`
position: relative;
top: calc(40% - 120px);
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #3c3e44;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Label = styled.label`
  position: absolute;
  color: #fff;
  top: 8px;
  left: 8px;
  font-weight: 500;
  pointer-events: none;
  transition: all 0.5s;
`;

export const Input = styled.input`
  align-self: center;
  width: 100%;
  padding: 12px;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #3c3e44;
  color: #fff;
  &:focus, &:valid {
    outline: 1px solid #09f;
    border: 1px solid transparent;
    & ~ label {
      color: #09f;
      transform: translateX(20px) translateY(-24px);
      background-color: #3c3e44;
      transition: all 0.5s;
    }
  }
`;

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const ButtonLogin = styled.button`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  background-color: #09f;
  font-size: 1.1rem;
  &.loading {
    opacity: .5;
  }
  &:hover {
    opacity: .5;
  }
  & > div {
    width: 20px;
    margin: 0 auto;
    height: 20px;
    border-radius: 50%;
    border: 4px solid rgba(0, 0, 0, .4);
    border-left-color: #000;
    animation: ${spinner} 1s linear infinite;
  }
`;

export const DivStyle = styled.div`
  position: relative;
  width: 70%;
  max-width: 334px;
  display: flex;
  justify-Content:center;
  flex-direction: column;
  /* align-items: center; */
  & > .danger {
    color: #ef4444;
  }
`

export const Side = styled.section`
  width: 50%;
  height: 1290px;
  background-color: #3c3e44;
  display: flex;
  align-items: center;
  justify-content: center;
`;
