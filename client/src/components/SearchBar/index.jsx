import { useState } from "react";
import {
  Container,
  InputContainer,
  InputStyle,
  ButtonStyle,
  ButtonsContainer,
} from "./styles";

export default function SearchBar({ onSearch, onRandom, error }) {
  const [input, setInput] = useState("");
  const handleInputChange = () => {
    if (input.trim().length > 0) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <Container>
      <InputContainer>
        {error ? (
          <InputStyle
            error
            placeholder="Personaje No encontrado..."
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
        ) : (
          <InputStyle
            placeholder="Ingrese un Id..."
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
        )}
      </InputContainer>
      <ButtonsContainer>
        <ButtonStyle onClick={handleInputChange} primary>
          Agregar
        </ButtonStyle>
        <ButtonStyle onClick={onRandom}>Random</ButtonStyle>
      </ButtonsContainer>
    </Container>
  );
}
