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

// app config
import AppConfig from '../../constants/AppConfig';



// For Basic Table
let id = 0;

function createData(num, nombre, cantidad) {
  id += 1;
  return { id, num, nombre, cantidad };
}

const data = [
    createData(1, 'Camara 3/4', 20),
    createData(2, 'Camara 3/4', 20),
    createData(3, 'Camara 3/4', 20)
  ];
 
class TagsPage extends Component {
  render() {
     return (
        <div className="dashboard-v1">
            <div className="page-title d-sm-flex justify-content-between align-items-center">
                    <div className="page-title-wrap">
                        <h2 className="">Tags Audivisuales</h2>
                    </div>
            </div>




       <RctCollapsibleCard heading="Lista de Tags" fullBlock>
          <div className="table-responsive">
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell numeric>#</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell numeric>Cantidad</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {data.map(n => {
                    return (
                      <TableRow hover key={n.id}>
                        <TableCell numeric>{n.num}</TableCell>
                        <TableCell>{n.nombre}</TableCell>
                        <TableCell numeric>{n.cantidad}</TableCell>
                        
                        <TableCell></TableCell>
                      </TableRow>
                    );
                  })}
                </Fragment>
              </TableBody>
            </Table>
          </div>
        </RctCollapsibleCard>




        </div>
     )
  }
}
 
export default TagsPage;