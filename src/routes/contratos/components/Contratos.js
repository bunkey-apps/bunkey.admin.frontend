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
    getContratos,
    addContrato
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

  

class Contratos extends Component {
    
    constructor() {
        super()
        this.state = { 
          addNewCustomerForm: false,
          editCustomerModal: false,
          editCustomer: null,
          addNewCustomerDetails: {
                client: '',
                monthlyPaymentDay: '',
                monthlyCost: '',
                startDate: '',
                endDate: '',
                sizeTotal: '',
                sizeVideoRow: '',
                sizeVideoFinal: ''
            }
      }
    }

     

      componentWillMount() {
        this.props.getContratos();
      }
     
      onAddContrato() {
        this.setState({
            editCustomerModal: true,
            addNewCustomerForm: true,
            editCustomer: null,
            addNewCustomerDetails: {
              client: '',
              monthlyPaymentDay: '',
              monthlyCost: '',
              startDate: '',
              endDate: '',
              sizeTotal: '',
              sizeVideoRow: '',
              sizeVideoFinal: ''
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
  onSubmitAddNewContratoForm() {
    const { addNewCustomerDetails } = this.state;
    console.log('addNewCustomerDetails',addNewCustomerDetails);
    if (addNewCustomerDetails.monthlyPaymentDay !== '' && addNewCustomerDetails.monthlyCost !== '' && addNewCustomerDetails.startDate !== '' 
    && addNewCustomerDetails.endDate !== '' && addNewCustomerDetails.sizeTotal !== ''  && addNewCustomerDetails.sizeVideoRow !== ''
    && addNewCustomerDetails.sizeVideoFinal !== '') {
        this.setState({ editCustomerModal: false});
        console.log(' contrato addNewCustomerDetails',addNewCustomerDetails);
       this.props.addContrato(addNewCustomerDetails);
        // test despues borrrar y detectar cuando responde el crear
        setTimeout(() => {
          this.props.getContratos();
      }, 1000);
        
    }
}

      render() {
        const { items, loading } = this.props;
        const { newCustomers, sectionReload, alertDialog, editCustomerModal, addNewCustomerForm, editCustomer, snackbar, successMessage, addNewCustomerDetails } = this.state;

        return (       
          
          
        <div>


          
            <RctCollapsibleCard heading="Contratos" reloadable ><a href="javascript:void(0)" onClick={() => this.onAddContrato()}><i className="ti-plus"></i></a>
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
                    <TableCell>Tamaño Total</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Monto</TableCell>
                    <TableCell>Pagado</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {items.map((n, index) => {
                      return (
                        <TableRow hover key={index}>
                         <TableCell numeric>{index}</TableCell>
                         <TableCell>{n.plan.sizeTotal}</TableCell>
                          <TableCell>Pendiente</TableCell>
                          <TableCell>${n.monthlyPaymentDay}</TableCell>
                          <TableCell>Atrasado</TableCell>
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
                                        <Label for="Dni">sizeTotal</Label>
                                        <Input
                                            type="text"
                                            name="sizeTotal"
                                            id="sizeTotal"
                                            value={addNewCustomerDetails.sizeTotal}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('sizeTotal', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="sizeVideoRow">sizeVideoRow</Label>
                                        <Input
                                            type="text"
                                            name="sizeVideoRow"
                                            id="sizeVideoRow"
                                            value={addNewCustomerDetails.sizeVideoRow}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('sizeVideoRow', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="sizeVideoFinal">sizeVideoFinal</Label>
                                        <Input
                                            type="text"
                                            name="sizeVideoFinal"
                                            id="sizeVideoFinal"
                                            value={addNewCustomerDetails.sizeVideoFinal}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('sizeVideoFinal', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="monthlyPaymentDay">monthlyPaymentDay</Label>
                                        <Input
                                            type="number"
                                            name="monthlyPaymentDay"
                                            id="monthlyPaymentDay"
                                            value={addNewCustomerDetails.monthlyPaymentDay}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('monthlyPaymentDay', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="monthlyCost">monthlyCost</Label>
                                        <Input
                                            type="number"
                                            name="monthlyCost"
                                            id="monthlyCost"
                                            value={addNewCustomerDetails.monthlyCost}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('monthlyCost', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="startDate">startDate</Label>
                                        <Input
                                            type="date"
                                            name="startDate"
                                            id="startDate"
                                            value={addNewCustomerDetails.startDate}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('startDate', e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="endDate">endDate</Label>
                                        <Input
                                            type="date"
                                            name="endDate"
                                            id="endDate"
                                            value={addNewCustomerDetails.endDate}
                                            onChange={(e) => this.onChangeCustomerAddNewForm('endDate', e.target.value)}
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
                                    <Button variant="raised" className="btn-primary text-white" onClick={() => this.onSubmitAddNewContratoForm()}><IntlMessages id="button.add" /></Button>{' '}
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
const mapStateToProps = ({ contratos }) => {
    return contratos;
  }
  
  export default withRouter(connect(mapStateToProps, {
    getContratos,addContrato
  })(Contratos));