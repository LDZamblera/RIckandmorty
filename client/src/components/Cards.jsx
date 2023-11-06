import Card from "./Card";
import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  width: 90%;
  padding: 30px;
  margin: 0 auto;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 60px;
`;

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <Grid>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          gender={character.gender}
          onClose={onClose}
          image={character.image}
        />
      ))}
    </Grid>
  );
}
