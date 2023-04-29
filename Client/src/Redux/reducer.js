import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: payload,
                allCharacters: payload 
            };
            case REMOVE_FAV:
                return {
                    ...state,
                    myFavorites: payload, 
                    allCharactersFav: payload
                };

            case FILTER:
                const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === payload)
                return {
                    ...state,
                    myFavorites: 
                     payload === "allCharacters"
                     ? [...state.allCharactersFav]
                     : allCharactersFiltered
                }

            case ORDER: 
            const allCharsFavCopy = [...state.allCharactersFiltered]
            return {
                ...state,
                myFavorites: 
                    payload === "A"
                    ? allCharsFavCopy.sort((a, b) => a.id - b.id)
                    : allCharsFavCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return {...state}
    }
}

export default reducer;