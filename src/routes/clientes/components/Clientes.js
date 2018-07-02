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
    getClientes,
    addClientes
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

  

class Clientes extends Component {
    
    constructor() {
        super()
        this.state = { 
          addNewCustomerForm: false,
          editCustomerModal: false,
          editCustomer: null,
          addNewCustomerDetails: {
                dni: '',
                name: '',
                agent: '',
                photo_url: '',
                email: '',
                phone: '',
                id: ''
            }
      }
    }

      getContratos = (clienteSelect) => {
       //        history.push(`${match.url}/contratos`); SLIDER
       localStorage.setItem("clienteSelect", JSON.stringify(clienteSelect));
       const { match, history } = this.props;
        history.push(`${match.url}/contratos`);
       
      }

      componentWillMount() {
        this.props.getClientes();
      }
     
      onAddClient() {
        this.setState({
            editCustomerModal: true,
            addNewCustomerForm: true,
            editCustomer: null,
            addNewCustomerDetails: {
                dni: '',
                name: '',
                agent: '',
                photo_url: '',
                email: '',
                phone: '',
                id: ''
            }
        }); 
    }

     // on change customer details
     onChangeCustomerDetails(key, value) {
      this.setState({
          editCustomer: {
              ...this.state.editCustomer,
              [key]: value
          }
      });
  }
    // on change customer add new form value
    onChangeCustomerAddNewForm(key, value) {
      this.setState({
          addNewCustomerDetails: {
              ...this.state.addNewCustomerDetails,
              [key]: value
          }
      })
  }

  // on submit add new customer form
  onSubmitAddNewCustomerForm() {
    const { addNewCustomerDetails } = this.state;
    if (addNewCustomerDetails.name !== '' && addNewCustomerDetails.email !== '' && addNewCustomerDetails.phone !== '' 
    && addNewCustomerDetails.agent !== '' && addNewCustomerDetails.dni !== '') {
        this.setState({ editCustomerModal: false});
        console.log('addNewCustomerDetails',addNewCustomerDetails);
        this.props.addClientes(addNewCustomerDetails);
        // test despues borrrar y detectar cuando responde el crear
        setTimeout(() => {
          this.props.getClientes();
      }, 1000);
        
    }
}

      render() {
        const { items, loading } = this.props;
        const { newCustomers, sectionReload, alertDialog, editCustomerModal, addNewCustomerForm, editCustomer, snackbar, successMessage, addNewCustomerDetails } = this.state;

        return (       
          
          
        <div>


          
            <RctCollapsibleCard heading="Lista Usuarios" reloadable ><a href="javascript:void(0)" onClick={() => this.onAddClient()}><i className="ti-plus"></i></a>
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
                    <TableCell>Nombre DNI</TableCell>
                    <TableCell>Datos Contacto</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Saldo Atrasado</TableCell>
                    <TableCell>Tamaño Ocupado</TableCell>
                    <TableCell>Usuarios</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {items.map((n, index) => {
                      return (
                        <TableRow hover key={index}  onClick={() => this.getContratos(n)}>
                         <TableCell numeric>{index}</TableCell>
                          <TableCell>{n.dni}</TableCell>
                          <TableCell>{n.name} {n.email}</TableCell>
                          {n.status ?  <TableCell>Activo</TableCell> : <TableCell>Pendiente</TableCell>}

                         <TableCell>500 GB Bitacora</TableCell>
                          <TableCell>$800.000</TableCell>
                          <TableCell>5Usuarios</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      );
                    })}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
          </RctCollapsibleCard>
{/* Customer Edit Modal*/}
                {editCustomerModal &&
                    <Modal
                        isOpen={editCustomerModal}
                        toggle={this.toggleEditCustomerModal}
                    >
                        <ModalHeader toggle={this.toggleEditCustomerModal}>
                            {addNewCustomerForm ? 'Crear Cliente' : 'Edit Customer'}
                        </ModalHeader>
                        <ModalBody>
                            {addNewCustomerForm ?
                                <Form>
                                  <FormGroup>
                                        <Label for="Dni">DNI</Label>
                                        <Input
                                            type="text"
                                            name="dni"
                                            id="dni"
                                            value={addNewCustomerDetails.dni}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('dni', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="name">Nombre</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={addNewCustomerDetails.name}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('name', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="agent">Agent</Label>
                                        <Input
                                            type="text"
                                            name="agent"
                                            id="agent"
                                            value={addNewCustomerDetails.agent}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('agent', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="telefono">Telefono</Label>
                                        <Input
                                            type="text"
                                            name="telefono"
                                            id="telefno"
                                            value={addNewCustomerDetails.phone}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('phone', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={addNewCustomerDetails.email}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('email', e.target.value)}
                                        />
                                    </FormGroup>
                                </Form>
                                : <Form>
                                    <FormGroup>
                                        <Label for="customerId">Id</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            id="customerId"
                                            defaultValue={editCustomer.customer_id}
                                            readOnly
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="customerName">Name</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            id="customerName"
                                            value={editCustomer.customer_name}
                                            onChange={(e) => this.onChangeCustomerDetails('customer_name', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="customerEmail">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="customerEmail"
                                            value={editCustomer.customer_email}
                                            onChange={(e) => this.onChangeCustomerDetails('customer_email', e.target.value)}
                                        />
                                    </FormGroup>
                                </Form>
                            }
                        </ModalBody>
                        <ModalFooter>
                            {addNewCustomerForm ?
                                <div>
                                    <Button variant="raised" className="btn-primary text-white" onClick={() => this.onSubmitAddNewCustomerForm()}><IntlMessages id="button.add" /></Button>{' '}
                                    <Button variant="raised" className="btn-danger text-white" onClick={this.toggleEditCustomerModal}><IntlMessages id="button.cancel" /></Button>
                                </div>
                                : <div><Button variant="raised" className="btn-primary text-white" onClick={() => this.onSubmitCustomerEditDetailForm()}><IntlMessages id="button.update" /></Button>{' '}
                                    <Button variant="raised" className="btn-danger text-white" onClick={this.toggleEditCustomerModal}><IntlMessages id="button.cancel" /></Button></div>
                            }
                        </ModalFooter>
                    </Modal>
                }
          </div>
          
        )
      }
    }
   
// map state to props
const mapStateToProps = ({ clientes }) => {
    return clientes;
  }
  
  export default withRouter(connect(mapStateToProps, {
    getClientes,addClientes
  })(Clientes));