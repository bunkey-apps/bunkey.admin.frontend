/**
 * Clientes Actions
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
    axios.get('https://private-anon-29819f91c9-bunkeyapigateway.apiary-mock.com/v1/admin/users')
        .then((response) => {
            console.log('response usuarios',response);
            dispatch({ type: GET_USUARIOS_SUCCES, payload: response.data });
        })
        .catch(error => {
            // error handling
        })
}
