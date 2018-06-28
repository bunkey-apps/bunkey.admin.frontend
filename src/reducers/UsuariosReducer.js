/**
 * Feedbacks Reducers
 */
import update from 'react-addons-update';
import { NotificationManager } from 'react-notifications';

// action types
import {
    GET_USUARIOS,
    GET_USUARIOS_FAILURE,
    GET_USUARIOS_SUCCES
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

        case GET_USUARIOS:
            return { ...state, loading: true };

        // get Usuarios
        case GET_USUARIOS_SUCCES:
            return {
                ...state,
                items: action.payload,
                loading: false
            };


        default: return { ...state };
    }
}
