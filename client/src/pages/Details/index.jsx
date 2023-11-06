import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  DetailContainer,
  InfoContainer,
  Title,
  Circle,
  StatusContainer,
  Parrafo,
  ParrafoHead,
} from "./styles";

export default function Details() {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/rickandmorty/detail/${detailId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else navigate("/404");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <DetailContainer>
        <img src={character.image} alt={character.name} />
        <InfoContainer>
          <Title>{character.name}</Title>
          <StatusContainer>
            <Circle status={character.status}></Circle>
            {character.status}-{character.species}
          </StatusContainer>
          <div>
            <ParrafoHead>Género:</ParrafoHead>
            <Parrafo>{character.gender}</Parrafo>
            <ParrafoHead>Origen:</ParrafoHead>
            <Parrafo>{character.origin?.name}</Parrafo>
          </div>
        </InfoContainer>
      </DetailContainer>
    </Container>
  );
}
