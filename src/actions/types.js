/**
 * App Redux Action Types
 */
export const COLLAPSED_SIDEBAR = 'COLLAPSED_SIDEBAR';
export const DARK_MODE = 'DARK_MODE';
export const BOXED_LAYOUT = 'BOXED_LAYOUT';
export const RTL_LAYOUT = 'RTL_LAYOUT';
export const MINI_SIDEBAR = 'MINI_SIDEBAR';
export const SEARCH_FORM_ENABLE = 'SEARCH_FORM_ENABLE';
export const ACTIVATE_SIDEBAR_FILTER = 'ACTIVATE_SIDEBAR_FILTER';
export const TOGGLE_SIDEBAR_IMAGE = 'TOGGLE_SIDEBAR_IMAGE';
export const SET_SIDEBAR_IMAGE = 'SET_SIDEBAR_IMAGE';
export const SET_LANGUAGE = 'SET_LANGUAGE';

// Chat App Actions
export const CHAT_WITH_SELECTED_USER = 'CHAT_WITH_SELECTED_USER';
export const SEND_MESSAGE_TO_USER = 'SEND_MESSAGE_TO_USER';
export const UPDATE_USERS_SEARCH = 'UPDATE_USERS_SEARCH';
export const SEARCH_USERS = 'SEARCH_USERS';
export const GET_RECENT_CHAT_USERS = 'GET_RECENT_CHAT_USERS';


//Contratos Action
export const GET_CONTRATOS = 'GET_CONTRATOS';
export const GET_CONTRATOS_SUCCES = 'GET_CONTRATOS_SUCCES';
export const GET_CONTRATOS_FAILURE = 'GET_CONTRATOS_FAILURE';

export const ADD_CONTRATOS = 'ADD_CONTRATOS';
export const ADD_CONTRATOS_SUCCES = 'ADD_CONTRATOS_SUCCES';
export const ADD_CONTRATOS_FAILURE = 'ADD_CONTRATOS_FAILURE';

export const UPDATE_CONTRATOS = 'UPDATE_CONTRATOS';
export const UPDATE_CONTRATOS_SUCCES = 'UPDATE_CONTRATOS_SUCCES';
export const UPDATE_CONTRATOS_FAILURE = 'UPDATE_CONTRATOS_FAILURE';

export const DELETE_CONTRATOS = 'DELETE_CONTRATOS';
export const DELETE_CONTRATOS_SUCCES = 'DELETE_CONTRATOS_SUCCES';
export const DELETE_CONTRATOS_FAILURE = 'DELETE_CONTRATOS_FAILURE';

//Usuarios Action
export const GET_USUARIOS = 'GET_USUARIOS';
export const GET_USUARIOS_SUCCES = 'GET_USUARIOS_SUCCES';
export const GET_USUARIOS_FAILURE = 'GET_USUARIOS_FAILURE';

export const ADD_USUARIOS = 'ADD_USUARIOS';
export const ADD_USUARIOS_FAILURE = 'ADD_USUARIOS_FAILURE';
export const ADD_USUARIOS_SUCCES = 'ADD_USUARIOS_SUCCES';

export const UPDATE_USUARIOS = 'UPDATE_USUARIOS';
export const UPDATE_USUARIOS_FAILURE = 'UPDATE_USUARIOS_FAILURE';
export const UPDATE_USUARIOS_SUCCES = 'UPDATE_USUARIOS_SUCCES';

export const DELETE_USUARIOS = 'DELETE_USUARIOS';
export const DELETE_USUARIOS_FAILURE = 'DELETE_USUARIOS_FAILURE';
export const DELETE_USUARIOS_SUCCES = 'DELETE_USUARIOS_SUCCES';

//Clientes Action
export const GET_CLIENTES = 'GET_CLIENTES';
export const GET_CLIENTES_FAILURE = 'GET_CLIENTES_FAILURE';
export const GET_CLIENTES_SUCCES = 'GET_CLIENTES_SUCCES';

export const ADD_CLIENTES = 'ADD_CLIENTES';
export const ADD_CLIENTES_FAILURE = 'ADD_CLIENTES_FAILURE';
export const ADD_CLIENTES_SUCCES = 'ADD_CLIENTES_SUCCES';

export const UPDATE_CLIENTES = 'UPDATE_CLIENTES';
export const UPDATE_CLIENTES_FAILURE = 'UPDATE_CLIENTES_FAILURE';
export const UPDATE_CLIENTES_SUCCES = 'UPDATE_CLIENTES_SUCCES';

export const DELETE_CLIENTES = 'DELETE_CLIENTES';
export const DELETE_CLIENTES_FAILURE = 'DELETE_CLIENTES_FAILURE';
export const DELETE_CLIENTES_SUCCES = 'DELETE_CLIENTES_SUCCES';

//Tags Action
export const GET_TAGS = 'GET_TAGS';
export const GET_TAGS_FAILURE = 'GET_TAGS_FAILURE';
export const GET_TAGS_SUCCES = 'GET_TAGS_SUCCES';

export const ADD_TAGS = 'ADD_TAGS';
export const ADD_TAGS_FAILURE = 'ADD_TAGS_FAILURE';
export const ADD_TAGS_SUCCES = 'ADD_TAGS_SUCCES';



export const RECUPERAR_CLAVE = 'RECUPERAR_CLAVE';
export const RECUPERAR_CLAVE_FAILURE = 'RECUPERAR_CLAVE_FAILURE';
export const RECUPERAR_CLAVE_SUCCES = 'RECUPERAR_CLAVE_SUCCES';

export const UPDATE_TAGS = 'UPDATE_TAGS';
export const UPDATE_TAGS_FAILURE = 'UPDATE_TAGS_FAILURE';
export const UPDATE_TAGS_SUCCES = 'UPDATE_TAGS_SUCCES';

export const DELETE_TAGS = 'DELETE_TAGS';
export const DELETE_TAGS_FAILURE = 'DELETE_TAGS_FAILURE';
export const DELETE_TAGS_SUCCES = 'DELETE_TAGS_SUCCES';

// Mail App
export const GET_EMAILS = 'GET_EMAILS'; 
export const GET_EMAIL_SUCCESS = 'GET_EMAIL_SUCCESS';
export const GET_EMAIL_FAILURE = 'GET_EMAIL_FAILURE';
export const SET_EMAIL_AS_STAR = 'SET_EMAIL_AS_STAR';
export const READ_EMAIL = 'READ_EMAIL';
export const HIDE_LOADING_INDICATOR = 'HIDE_LOADING_INDICATOR';
export const FETCH_EMAILS = 'FETCH_EMAILS';
export const ON_SELECT_EMAIL = 'ON_SELECT_EMAIL';
export const UPDATE_EMAIL_SEARCH = 'UPDATE_EMAIL_SEARCH';
export const SEARCH_EMAIL = 'SEARCH_EMAIL';
export const ON_DELETE_MAIL = 'ON_DELETE_MAIL';
export const ON_BACK_PRESS_NAVIGATE_TO_EMAIL_LISTING = 'ON_BACK_PRESS_NAVIGATE_TO_EMAIL_LISTING';
export const GET_SENT_EMAILS = 'GET_SENT_EMAILS';
export const GET_INBOX = 'GET_INBOX';
export const GET_DRAFTS_EMAILS = 'GET_DRAFTS_EMAILS';
export const GET_SPAM_EMAILS = 'GET_SPAM_EMAILS';
export const GET_TRASH_EMAILS = 'GET_TRASH_EMAILS';
export const ON_EMAIL_MOVE_TO_FOLDER = 'ON_EMAIL_MOVE_TO_FOLDER';
export const SELECT_ALL_EMAILS = 'SELECT_ALL_EMAILS';
export const UNSELECT_ALL_EMAILS = 'UNSELECT_ALL_EMAILS';
export const ON_SEND_EMAIL = 'ON_SEND_EMAIL';
export const EMAIL_SENT_SUCCESSFULLY = 'EMAIL_SENT_SUCCESSFULLY';
export const FILTER_EMAILS_WITH_LABELS = 'FILTER_EMAILS_WITH_LABELS';
export const ADD_LABELS_INTO_EMAILS = 'ADD_LABELS_INTO_EMAILS';

// sidebar
export const TOGGLE_MENU = 'TOGGLE_MENU';

// ToDo App
export const GET_TODOS = 'GET_TODOS';
export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const ON_SELECT_TODO = 'ON_SELECT_TODO';
export const ON_HIDE_LOADER = 'ON_HIDE_LOADER';
export const ON_BACK_TO_TODOS = 'ON_BACK_TO_TODOS';
export const ON_SHOW_LOADER = 'ON_SHOW_LOADER';
export const MARK_AS_STAR_TODO = 'MARK_AS_STAR_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_LABELS_INTO_THE_TASK = 'ADD_LABELS_INTO_THE_TASK';
export const GET_ALL_TODO = 'GET_ALL_TODO';
export const GET_COMPLETED_TODOS = 'GET_COMPLETED_TODOS';
export const GET_DELETED_TODOS = 'GET_DELETED_TODOS';
export const GET_STARRED_TODOS = 'GET_STARRED_TODOS';
export const GET_FILTER_TODOS = 'GET_FILTER_TODOS';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const UPDATE_TASK_TITLE = 'UPDATE_TASK_TITLE';
export const UPDATE_TASK_DESCRIPTION = 'UPDATE_TASK_DESCRIPTION';
export const CHANGE_TASK_ASSIGNER = 'CHANGE_TASK_ASSIGNER';
export const ON_CHECK_BOX_TOGGLE_TODO_ITEM = 'ON_CHECK_BOX_TOGGLE_TODO_ITEM';
export const SELECT_ALL_TODO = 'SELECT_ALL_TODO';
export const GET_UNSELECTED_ALL_TODO = 'GET_UNSELECTED_ALL_TODO';
export const SELECT_STARRED_TODO = 'SELECT_STARRED_TODO';
export const SELECT_UNSTARRED_TODO = 'SELECT_UNSTARRED_TODO';
export const ON_LABEL_SELECT = 'ON_LABEL_SELECT';
export const ON_LABEL_MENU_ITEM_SELECT = 'ON_LABEL_MENU_ITEM_SELECT';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const SEARCH_TODO = 'SEARCH_TODO';

// Auth Actions
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

// Feedbacks
export const GET_FEEDBACKS = 'GET_FEEDBACKS';
export const GET_FEEDBACKS_SUCCESS = 'GET_FEEDBACKS_SUCCESS';
export const GET_ALL_FEEDBACKS = 'GET_ALL_FEEDBACKS';
export const ON_CHANGE_FEEDBACK_PAGE_TABS = 'ON_CHANGE_FEEDBACK_PAGE_TABS';
export const MAKE_FAVORITE_FEEDBACK = 'MAKE_FAVORITE_FEEDBACK';
export const ON_DELETE_FEEDBACK = 'ON_DELETE_FEEDBACK';
export const VIEW_FEEDBACK_DETAILS = 'VIEW_FEEDBACK_DETAILS';
export const ADD_NEW_FEEDBACK = 'ADD_NEW_FEEDBACK';
export const SHOW_FEEDBACK_LOADING_INDICATOR = 'SHOW_FEEDBACK_LOADING_INDICATOR';
export const HIDE_FEEDBACK_LOADING_INDICATOR = 'HIDE_FEEDBACK_LOADING_INDICATOR';
export const NAVIGATE_TO_BACK = 'NAVIGATE_TO_BACK';
export const REPLY_FEEDBACK = 'REPLY_FEEDBACK';
export const SEND_REPLY = 'SEND_REPLY';
export const UPDATE_SEARCH_IDEA = 'UPDATE_SEARCH_IDEA';
export const ON_SEARCH_IDEA = 'ON_SEARCH_IDEA';
export const ON_COMMENT_FEEDBACK = 'ON_COMMENT_FEEDBACK';
