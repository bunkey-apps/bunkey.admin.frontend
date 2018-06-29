/**
 * Feedbacks Reducers
 */
import update from 'react-addons-update';
import { NotificationManager } from 'react-notifications';

// action types
import {
    GET_CLIENTES,
    GET_CLIENTES_FAILURE,
    GET_CLIENTES_SUCCES
} from '../actions/types';

/**
 * initial state
 */
const INIT_STATE = {
    loading: false,
    items: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_CLIENTES:
            return { ...state, loading: true };

        // get Usuarios
        case GET_CLIENTES_SUCCES:
            return {
                ...state,
                items: action.payload,
                loading: false
            };


        default: return { ...state };
    }
}
