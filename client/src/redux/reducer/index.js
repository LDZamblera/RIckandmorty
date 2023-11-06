import { ADD_FAVOURITE, REMOVE_FAVOURITE, FILTER, ORDER, GET_FAVOURITE} from "../action/types"

const typeOrders = {
    ASC: "Ascendente",
    DSC: "Descendiente"
}

const initialState = {
    fav: [],
    allCharacters: [],
}

export const reducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case GET_FAVOURITE:
             return {
                ...state,
                fav: [...payload],
                allCharacters: [...payload]
             }
        case ADD_FAVOURITE:
            return {
                ...state, 
            }
        case REMOVE_FAVOURITE: 
          return {
             ...state,
          }
        case FILTER:
            let filteredCharsByGender;
            if (payload === 'All') {
                filteredCharsByGender = state.allCharacters;
            }else {
                filteredCharsByGender = state.allCharacters.filter((char => char.gender === payload))
            }
            return{
                ...state,
                fav: filteredCharsByGender
            }
        case ORDER:
            const orderedChars = typeOrders.ASC === payload ? state.fav.sort((a , b) => a.id - b.id) : state.fav.sort((a, b) => b.id - a.id)
            return {
                ...state,
                fav: orderedChars
            }
        default:
            return {...state};
    }
}