/**
 * Contratos Actions
 */
import axios from 'axios';
import {
    GET_CLIENTES,
    GET_CLIENTES_FAILURE,
    GET_CLIENTES_SUCCES
} from './types';

// app config
import AppConfig from '../constants/AppConfig';





/**
 * Redux Action To Get Contratos
 */
export const getClientes = () => (dispatch) => {
    dispatch({ type: GET_CLIENTES });
    const token = localStorage.getItem('user_id');

    const tokenJson = JSON.parse(token);

    console.log('tokenJson4',tokenJson.accessToken);
    var instance2 = axios.create({
        baseURL: 'https://private-anon-29819f91c9-bunkeyapigateway.apiary-mock.com/',
        timeout: 3000,
        headers: {'Content-Type': 'application/json','Authorization': 'Bearer ' + tokenJson.accessToken}
      });
   
    instance2.get('v1/admin/clients')
        .then((response) => {
            console.log('response clients2',response);
            dispatch({ type: GET_CLIENTES_SUCCES, payload: response.data });
        })
        .catch(error => {
            // error handling
        })
}
