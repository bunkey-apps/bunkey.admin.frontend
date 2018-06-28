import React, { Component, Fragment } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Media } from 'reactstrap';
import IconButton from 'material-ui/IconButton';
import axios from 'axios';
import { connect } from "react-redux";
import { CircularProgress } from 'material-ui/Progress';

// page title bar
import PageTitleBar from '../../../components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from '../../../util/IntlMessages';

// rct card box
import RctCollapsibleCard from '../../../components/RctCollapsibleCard/RctCollapsibleCard';

// app config
import AppConfig from '../../../constants/AppConfig';

  // redux action
  import {
    getUsuarios
  } from '../../../actions';
   

let id = 0;

function createData(num, contrato, estado, monto, estadoPago) {
  id += 1;
  return { id, num, contrato, estado, monto, estadoPago };
}

const data = [
    createData(1, '1111-01', 'Pendiente','$ 500.000','Si'),
    createData(2, '1111-02', 'Pagado','$ 800.000','Si'),
    createData(3, '1111-03', 'Atrasado','$ 600.000','Si')
  ];

  

class Usuarios extends Component {
    
    constructor() {
        super()
        this.state = { name: {}, categories: ''};
      
      }

      componentWillMount() {
        this.props.getUsuarios();
      }

      render() {
        const { items, loading } = this.props;

        return (       
          
          
        <div>


          
            <RctCollapsibleCard heading="Lista Usuarios" fullBlock>
            {loading &&
                <div className="d-flex justify-content-center loader-overlay">
                  <CircularProgress />
                </div>
              }
            <div className="table-responsive">
          
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell numeric>#</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>e-mail</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Rol</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {items.map((n, index) => {
                      return (
                        <TableRow hover key={index}>
                         <TableCell numeric>{index}</TableCell>
                          <TableCell>{n.name}</TableCell>
                          <TableCell>{n.email}</TableCell>
                          {n.status ?  <TableCell>Activo</TableCell> : <TableCell>Pendiente</TableCell>}

                         
                          <TableCell>{n.role}</TableCell>
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
   
// map state to props
const mapStateToProps = ({ usuarios }) => {
    return usuarios;
  }
  
  export default connect(mapStateToProps, {
    getUsuarios
  })(Usuarios);