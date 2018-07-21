/*
 * Dashboard Page
 */
import React, { Component, Fragment } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Media } from 'reactstrap';
import IconButton from 'material-ui/IconButton';
import axios from 'axios';

// page title bar
import PageTitleBar from '../../components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from '../../util/IntlMessages';

// rct card box
import RctCollapsibleCard from '../../components/RctCollapsibleCard/RctCollapsibleCard';

import Pagos from './components/Pagos';


// app config
import AppConfig from '../../constants/AppConfig';



// For Basic Table
let id = 0;

function createData(num, nombre, mail, estado, rol) {
  id += 1;
  return { id, num, nombre, mail, estado, rol };
}

const data = [
    createData(1, 'Juanito Perez', 'jp@gmail.com','Activo','Cliente'),
    createData(2, 'Carlos Lopez', 'carlop@gmail.com','Activo','Cliente'),
    createData(3, 'Cesar Marquez', 'cesrq@gmail.com','Inactivo','Cliente'),

  ];
 
class PagosPage extends Component {
  render() {
     return (
        <div className="dashboard-v1">
            <div className="page-title d-sm-flex justify-content-between align-items-center">
                    <div className="page-title-wrap">
                        <h2 className="">Historial de Pagos</h2>
                    </div>
            </div>




       <Pagos />




        </div>
     )
  }
}
 
export default PagosPage;