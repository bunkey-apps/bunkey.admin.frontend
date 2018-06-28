/**
 * Contratos Actions
 */
import axios from 'axios';
import {
    GET_USUARIOS,
    GET_USUARIOS_FAILURE,
    GET_USUARIOS_SUCCES
} from './types';

// app config
import AppConfig from '../constants/AppConfig';





/**
 * Redux Action To Get Contratos
 */
export const getUsuarios = () => (dispatch) => {
    dispatch({ type: GET_USUARIOS });
    const token = localStorage.getItem('user_id');

    const tokenJson = JSON.parse(token);

    console.log('tokenJson4',tokenJson.accessToken);
    var instance2 = axios.create({
        baseURL: 'http://dev-api.bunkey.aureolab.cl/',
        timeout: 3000,
        headers: {'Content-Type': 'application/json','Authorization': 'Bearer ' + tokenJson.accessToken}
      });
   
    instance2.get('v1/admin/users')
        .then((response) => {
            console.log('response usuarios2',response);
            dispatch({ type: GET_USUARIOS_SUCCES, payload: response.data });
        })
        .catch(error => {
            // error handling
        })
}
