import * as types from './types';

const initialState = {
    lang: "ua"
}

export const localizationReducer = (state = initialState, action) => {
    let newState = state;

    switch (action.type) {
        //-----------------Зміна мови---------------------------
        case types.LOCALIZATION_CHANGE: {
            newState ={...state, lang: action.lang}
            break;
        }

        default: {
            return newState;
        }
    }
    return newState
}