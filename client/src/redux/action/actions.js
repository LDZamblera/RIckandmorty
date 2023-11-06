import { ADD_FAVOURITE, REMOVE_FAVOURITE, ORDER, FILTER, GET_FAVOURITE } from './types'


export const getFavourites = () => {
   return async (dispatch) => {
    try {
        await fetch('http://localhost:3000/rickandmorty/fav')
            .then((res) => res.json())
            .then((data) => dispatch({
                type: GET_FAVOURITE,
                payload: data
            }))
    } catch (error) {
        console.error(new Error(error.message))
    }
   }
}

export const addFavourite = (payload) => {
    return async (dispatch) => {
        try {
          const res = await fetch('http://localhost:3000/rickandmorty/fav', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({character: payload})
           })
           dispatch({
            type: ADD_FAVOURITE,
            payload: res
           })
        } catch (error) {
            console.error(new Error(error.message))
        }  
    }
}

export const removeFavourite = (payload) => {
   return async (dispatch) => {
      try {    
        const res = await fetch(`http://localhost:3000/rickandmorty/fav/${payload}`, { method: 'DELETE' })
        dispatch({
            type: REMOVE_FAVOURITE,
            payload: res
        })
      } catch (error) {
        console.error(new Error(error.message))        
      }   
   } 
}

export const filterCards = (payload) => {
    return {
        type: FILTER,
        payload
    }
}

export const orderCards = (payload) => {
    return {
        type: ORDER,
        payload
    }
}