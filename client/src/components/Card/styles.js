import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background-color: #3c3e44;
  border-radius: 8px;
  box-shadow: 1px 6px 5px 2px rgba(0, 0, 0, 0.67);
  transform: scale(1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const TitleName = styled.h2`
  color: #fff;
  font-weight: bold;
  &:hover {
    color: #fcd34d;
  }
`;

export const SectionInfo = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const ButtonDelete = styled.button`
  position: absolute;
  padding: 10px;
  background-color: #ef4444;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  right: 0;
  top: -10px;
`;

export const DivContainer = styled.div`
display: flex;
justify-content: space-between;
  padding: 10px;
`;

export const TitleInfo = styled.p`
  color: #fff;
`;

export const ButtonFav = styled.button`
 background-color: transparent;
 border: none;
 font-size: 1.6rem;
 cursor: pointer;
`