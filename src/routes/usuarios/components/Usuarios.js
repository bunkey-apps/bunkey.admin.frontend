import React, { Component, Fragment } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Media } from 'reactstrap';
import IconButton from 'material-ui/IconButton';
import axios from 'axios';
import { connect } from "react-redux";
import { CircularProgress } from 'material-ui/Progress';
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
    getUsuarios,
    addUsuario,
    deleteUsuario,
    updateUsuario
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
        this.state = { 
          addNewCustomerForm: false,
          editCustomerModal: false,
          editCustomer: null,
          selectedDeletedCustomer: null,
          alertDialog: false,
          addNewCustomerDetails: {
                email: '',
                password: '',
                name: '',
                role: '',
                workspace: '',
                clietntOwner: ''
            }
      }
      
      }

      componentWillMount() {
        this.props.getUsuarios();
      }

      onAddUsuario() {
        this.setState({
            editCustomerModal: true,
            addNewCustomerForm: true,
            editCustomer: null,
            addNewCustomerDetails: {
                email: '',
                password: '',
                name: '',
                role: '',
                workspace: '',
                clietntOwner: ''
            }
        }); 
    }

    onChangeCustomerAddNewForm(key, value) {
      this.setState({
          addNewCustomerDetails: {
              ...this.state.addNewCustomerDetails,
              [key]: value
          }
      })
  }

  onSubmitAddNewCustomerForm() {
    const { addNewCustomerDetails } = this.state;
    if (addNewCustomerDetails.email !== '' && addNewCustomerDetails.password !== '' && addNewCustomerDetails.name !== '' 
    && addNewCustomerDetails.role !== '') {
        this.setState({ editCustomerModal: false});
        console.log('addNewCustomerDetails',addNewCustomerDetails);
        this.props.addUsuario(addNewCustomerDetails);
        // test despues borrrar y detectar cuando responde el crear
        setTimeout(() => {
          this.props.getUsuarios();
      }, 1000);
        
    }
}

onSubmitCustomerEditDetailForm() {
  const { editCustomer } = this.state;
  if (editCustomer.email !== '' && editCustomer.password !== '' && editCustomer.name !== '' 
  && editCustomer.role !== '') {
      this.setState({ editCustomerModal: false});
      console.log('editCustomer',editCustomer);
      
      this.props.updateUsuario(editCustomer);
      // test despues borrrar y detectar cuando responde el crear
      setTimeout(() => {
        this.props.getUsuarios();
    }, 1000);
      
  }
}

toggleEditCustomerModal = () => {
  this.setState({
      editCustomerModal: !this.state.editCustomerModal
  });
}

onChangeCustomerDetails(key, value) {
  this.setState({
      editCustomer: {
          ...this.state.editCustomer,
          [key]: value
      }
  });
}

// close alert
handleClose = () => {
  console.log('handleClose');
this.setState({ alertDialog: false });
}

// edit customer
onEditCustomer(customer) {
this.setState({ editCustomerModal: true, editCustomer: customer, addNewCustomerForm: false });
}

// on delete customer
onDeleteCustomer(customer) {
this.setState({ alertDialog: true, selectedDeletedCustomer: customer });
}

// delete customer
deleteCustomer() {
  this.setState({ alertDialog: false});
 
  console.log('this.state.selectedDeletedCustomer',this.state.selectedDeletedCustomer);
  this.props.deleteUsuario(this.state.selectedDeletedCustomer);
  // test despues borrrar y detectar cuando responde el crear
  setTimeout(() => {
    this.props.getUsuarios();
}, 1000);
}

      render() {
        const { items, loading } = this.props;
        const { newCustomers, sectionReload, alertDialog, editCustomerModal, addNewCustomerForm, editCustomer, snackbar, successMessage, addNewCustomerDetails } = this.state;

        return (       
          
          
        <div>


          
            <RctCollapsibleCard>

                <div className={'rct-block-title'}>
                    <h4>Lista Usuarios</h4>
                    <div className="contextual-link">
                        <a href="javascript:void(0)" onClick={() => this.onAddUsuario()}><i className="ti-plus"></i></a>
                    </div>
                </div>



            {loading &&
                <div className="d-flex justify-content-center loader-overlay">
                  <CircularProgress />
                </div>
              }
            <div className="table-responsive">
          
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell >#</TableCell>
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
                         <TableCell >{index}</TableCell>
                          <TableCell>{n.name}</TableCell>
                          <TableCell>{n.email}</TableCell>
                          {n.status ?  <TableCell>Activo</TableCell> : <TableCell>Pendiente</TableCell>}

                         
                          <TableCell>{n.role}</TableCell>
                          <TableCell>
                          <div className="row">
                          <div className="col-md-6">
                          <a href="javascript:void(0)"  onClick={() => this.onEditCustomer(n)}>
                                        <i className="zmdi zmdi-edit"></i>
                                    </a>
                          </div>
                          <div className="col-md-6">
                          <a href="javascript:void(0)"   onClick={() => this.onDeleteCustomer(n)}>
                                        <i className="zmdi zmdi-delete"></i>
                                    </a>
                          </div>
                          </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
          </RctCollapsibleCard>



<Dialog
                    open={alertDialog}
                    onClose={this.handleClose}
                >
                    <DialogTitle>{"Estas seguro de eliminarlo?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                           Estas seguro de eliminarlo de forma permanente.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="raised"  onClick={this.handleClose} className="btn-danger text-white">
                            <IntlMessages id="button.cancel" />
                        </Button>
                        <Button variant="raised" onClick={() => this.deleteCustomer()} className="btn-primary text-white" autoFocus>
                            <IntlMessages id="button.yes" />
                        </Button>
                    </DialogActions>
                </Dialog>
{/* Customer Edit Modal*/}
                {editCustomerModal &&
                    <Modal
                        isOpen={editCustomerModal}
                        toggle={this.toggleEditCustomerModal}
                    >
                        <ModalHeader toggle={this.toggleEditCustomerModal}>
                            {addNewCustomerForm ? 'Crear Usuario' : 'Editar Usuario'}
                        </ModalHeader>
                        <ModalBody>
                            {addNewCustomerForm ?
                                <Form>
                                  <FormGroup>
                                        <Label for="email">email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={addNewCustomerDetails.email}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('email', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="name">Clave</Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={addNewCustomerDetails.password}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('password', e.target.value)}
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
                                        <Label for="telefono">Rol</Label>
                                        <Input
                                            type="text"
                                            name="role"
                                            id="role"
                                            value={addNewCustomerDetails.role}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('role', e.target.value)}
                                        />
                                    </FormGroup>
                                   
                                </Form>
                                : <Form>
                                    <FormGroup>
                                        <Label for="email">email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={editCustomer.email}
                                            onChange={(e) => this.onChangeCustomerDetails('email', e.target.value)}
                                        />
                                    </FormGroup>
                                   
                                    <FormGroup>
                                        <Label for="name">Nombre</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={editCustomer.name}
                                            onChange={(e) => this.onChangeCustomerDetails('name', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="telefono">Rol</Label>
                                        <Input
                                            type="text"
                                            name="role"
                                            id="role"
                                            value={editCustomer.role}
                                            onChange={(e) => this.onChangeCustomerDetails('role', e.target.value)}
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
const mapStateToProps = ({ usuarios }) => {
    return usuarios;
  }
  
  export default connect(mapStateToProps, {
    getUsuarios,addUsuario,deleteUsuario,updateUsuario
  })(Usuarios);