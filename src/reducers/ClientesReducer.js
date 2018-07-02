/**
 * Feedbacks Reducers
 */
import update from 'react-addons-update';
import { NotificationManager } from 'react-notifications';

// action types
import {
    GET_CLIENTES,
    GET_CLIENTES_FAILURE,
    GET_CLIENTES_SUCCES,
    ADD_CLIENTES,
    ADD_CLIENTES_SUCCES,
    ADD_CLIENTES_FAILURE
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

        // get Client
        case GET_CLIENTES_SUCCES:
            return {
                ...state,
                items: action.payload,
                loading: false
            };

        case ADD_CLIENTES:
            return { ...state, loading: true };

        // ADD Client
        case ADD_CLIENTES_SUCCES:
            return {
                ...state,
                items: [],
                loading: true
            };

        default: return { ...state };
    }
}
