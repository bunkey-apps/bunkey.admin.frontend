import React, { Component, Fragment } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Media } from 'reactstrap';
import IconButton from 'material-ui/IconButton';
import axios from 'axios';
import { connect } from "react-redux";
import { CircularProgress } from 'material-ui/Progress';
import { withRouter } from 'react-router-dom';
import update from 'react-addons-update';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle, } from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import Avatar from 'material-ui/Avatar';
import moment from 'moment';
import RctCollapsibleCard from '../../../components/RctCollapsibleCard/RctCollapsibleCard';



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
 
class Pagos extends Component {

    constructor() {
        super()
        this.state = { 
          pagos: [],
          monto: ''
      }
      const pagosContrato = localStorage.getItem('pagosContrato');
      const pagosContratoJson = JSON.parse(pagosContrato);
      console.log('pagosContratoJson',pagosContratoJson);
      this.state.pagos = pagosContratoJson.payments;
      this.state.monto = pagosContratoJson.monthlyCost;
    }



  render() {
     return (
        



       <RctCollapsibleCard heading="Cartola" fullBlock>
          <div className="table-responsive">
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>#</TableCell>
                  <TableCell>Monto</TableCell>
                  <TableCell>Mes</TableCell>
                  <TableCell>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                {this.state.pagos.map((n, index) => {
                    return (
                      <TableRow hover key={index}>
                        <TableCell>{index}</TableCell>
                        <TableCell>${this.state.monto}</TableCell>
                        <TableCell>{n.month}</TableCell>
                        
                        {n.paymed ?  <TableCell>Pagado</TableCell> : <TableCell>Pendiente</TableCell>}

                      </TableRow>
                    );
                  })}
                </Fragment>
              </TableBody>
            </Table>
          </div>
        </RctCollapsibleCard>




      
     )
  }
}
 
export default Pagos;