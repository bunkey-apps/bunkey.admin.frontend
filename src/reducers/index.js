/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import settings from './settings';
import chatAppReducer from './ChatAppReducer';
import emailAppReducer from './EmailAppReducer';
import sidebarReducer from './SidebarReducer';
import todoAppReducer from './TodoAppReducer';
import authUserReducer from './AuthUserReducer';
import feedbacksReducer from './FeedbacksReducer';
import contratosReducer from './ContratosReducer';
import usuariosReducer from './UsuariosReducer';
import clientesReducer from './ClientesReducer';
import tagsReducer from './TagsReducer';
import recuperarReducer from './RecuperarReducer';


const reducers = combineReducers({
  settings,
  chatAppReducer,
  emailApp: emailAppReducer,
  sidebar: sidebarReducer,
  todoApp: todoAppReducer,
  authUser: authUserReducer,
  feedback: feedbacksReducer,
  contratos: contratosReducer,
  usuarios: usuariosReducer,
  clientes: clientesReducer,
  tags: tagsReducer,
  recuperar: recuperarReducer
});

export default reducers;
