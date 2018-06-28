/**
 * Contratos Actions
 */
import axios from 'axios';
import {
    GET_CONTRATOS,
    GET_CONTRATOS_FAILURE,
    GET_CONTRATOS_SUCCES
} from './types';

// app config
import AppConfig from '../constants/AppConfig';

/**
 * Redux Action To Get Contratos
 */
export const getContratos = () => (dispatch) => {
    dispatch({ type: GET_CONTRATOS });
    axios.get('https://private-anon-29819f91c9-bunkeyapigateway.apiary-mock.com/v1/admin/contracts')
        .then((response) => {
            console.log('response',response);
            dispatch({ type: GET_CONTRATOS_SUCCES, payload: response.data });
        })
        .catch(error => {
            // error handling
        })
}
