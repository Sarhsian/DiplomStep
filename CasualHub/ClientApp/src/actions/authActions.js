import axios from 'axios';
import { SET_CURRENT_USER } from './types';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthToken';


export function setCurrentUser(user) {
    return {
      type: SET_CURRENT_USER,
      user
    };
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    };
}

export function login(data) {
    return dispatch => {
        return axios.post('Account/login', data)
        .then(res => {
            var token=res.data;
            var user=jwt.decode(token);
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(user));
        });
    }
}

export function register(data) {
    return dispatch => {
        return axios.post('Account/register',data).then(res => {
            var token=res.data;
            var user=jwt.decode(token);
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(user));
        });
    }
}