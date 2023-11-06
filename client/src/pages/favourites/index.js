import { CardStyle, Img, SectionInfo, TitleName, DivContainer, TitleInfo} from "../../components/Card/styles";
import { Grid } from "../../components/Cards";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { filterCards, orderCards, getFavourites } from '../../redux/action/actions'
import { useEffect } from "react";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Select = styled.select`
    border: none;
    width: 150px;
    padding: 8px;
    box-shadow: 2px 7px 9px -4px rgba(0,0,0,0.76);
    &:focus{
        outline: 3px solid #09f;
    }
`
const Genders = ['Male', 'Female', 'unknown', 'Genderless'];

const Favourite = () => {
    const { fav } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFavourites())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleChangeOrder = (e) => {
        dispatch(orderCards(e.target.value))
    }

    const handleChangeFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }
    return <Container>
         <div style={{
                height: "40px",
                display: "flex",
                justifyContent: "center",
                padding: "8px",
                gap: "6px"
            }}>
                <Select onChange={handleChangeOrder}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendiente">Descendiente</option>
                </Select>
                <Select onChange={handleChangeFilter}>
                    <option value="All">All</option> 
                    {Genders.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </Select>
        </div>
        <Grid>
             {fav?.map(item => (
                <CardStyle key={item.id}>
                    <div style={{
                    height: "90%",
                    display: "flex",
                    }}>
                    <Img src={item.image} alt={item.name} />
                    </div>
                    <div>
                        <SectionInfo>
                            <TitleName>
                                {item.name}
                            </TitleName>
                        </SectionInfo>
                        <DivContainer>
                            <TitleInfo>
                                {item.gender}
                            </TitleInfo>
                        </DivContainer>
                    </div>
                </CardStyle>
            ))}
        </Grid>
    </Container>

} 

export default Favourite