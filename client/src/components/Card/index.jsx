import {
  CardStyle,
  ButtonDelete,
  Img,
  SectionInfo,
  TitleInfo,
  TitleName,
  DivContainer,
  ButtonFav,
} from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addFavourite, removeFavourite } from "../../redux/action/actions";

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const {
    name,
    gender,
    image,
    onClose,
    id,
    addFavourite,
    removeFavourite,
    allCharacters,
  } = props;
  const handleFavouriteCharacter = () => {
    if (isFav) {
      removeFavourite(id);
      setIsFav(false);
    } else {
      addFavourite({ name, gender, image, id });
      setIsFav(true);
    }
  };

  useEffect(() => {
    allCharacters.forEach((char) => {
      if (char.id === id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCharacters]);

  return (
    <CardStyle>
      <div
        style={{
          height: "90%",
          display: "flex",
        }}
      >
        <ButtonDelete onClick={() => onClose(id)}>X</ButtonDelete>
        <Img src={image} alt="Character of Rick And Morty" />
      </div>
      <div>
        <SectionInfo>
          <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
            <TitleName>{name}</TitleName>
          </Link>
        </SectionInfo>
        <DivContainer>
          <TitleInfo>{gender}</TitleInfo>
          <ButtonFav onClick={handleFavouriteCharacter}>
            {isFav ? "💛" : "🤍"}
          </ButtonFav>
        </DivContainer>
      </div>
    </CardStyle>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addFavourite: (character) => dispatch(addFavourite(character)),
    removeFavourite: (id) => dispatch(removeFavourite(id)),
  };
}

function mapStateToProps(state) {
  return {
    allCharacters: state.allCharacters,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
