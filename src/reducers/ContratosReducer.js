/**
 * Feedbacks Reducers
 */
import update from 'react-addons-update';
import { NotificationManager } from 'react-notifications';

// action types
import {
    GET_CONTRATOS,
    GET_CONTRATOS_FAILURE,
    GET_CONTRATOS_SUCCES
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

        case GET_CONTRATOS:
            return { ...state, loading: true };

        // get Contratos
        case GET_CONTRATOS_SUCCES:
            return {
                ...state,
                items: action.payload,
                loading: false
            };


        default: return { ...state };
    }
}
