import * as types from './types';

export const changeLanguage = (language) => {
    return (dispatch) => {
        localStorage.setItem('lang', language);
        setLanguage(language, dispatch);
    }
}

export const setLanguage = (language, dispatch) => {
    dispatch({
        type: types.LOCALIZATION_CHANGE,
        lang: language
    });
}

