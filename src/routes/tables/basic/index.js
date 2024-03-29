/**
 * Basic Table
 */
/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Media } from 'reactstrap';
import IconButton from 'material-ui/IconButton';
import axios from 'axios';

// page title bar
import PageTitleBar from '../../../components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from '../../../util/IntlMessages';

// rct card box
import RctCollapsibleCard from '../../../components/RctCollapsibleCard/RctCollapsibleCard';

// app config
import AppConfig from '../../../constants/AppConfig';

// For Basic Table
let id = 0;

function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class BasicTable extends Component {

  state = {
    employeePayroll: null
  }

  componentWillMount() {
    this.getEmployeePayrolls();
  }

  // get employee payrols
  getEmployeePayrolls() {
    axios.get(`${AppConfig.appUrl}/data/employeePayrols.js`)
      .then((response) => {
        this.setState({ employeePayroll: response.data });
      })
      .catch(error => {
        // error handling
      })
  }

  render() {
    const { employeePayroll } = this.state;
    const { match } = this.props;
    return (
      <div className="table-wrapper">
        <PageTitleBar title={<IntlMessages id="sidebar.basic" />} match={match} />
        <RctCollapsibleCard heading="Basic Table" fullBlock>
          <div className="table-responsive">
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell numeric>Calories</TableCell>
                  <TableCell numeric>Fat (g)</TableCell>
                  <TableCell numeric>Carbs (g)</TableCell>
                  <TableCell numeric>Protein (g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {data.map(n => {
                    return (
                      <TableRow hover key={n.id}>
                        <TableCell>{n.name}</TableCell>
                        <TableCell numeric>{n.calories}</TableCell>
                        <TableCell numeric>{n.fat}</TableCell>
                        <TableCell numeric>{n.carbs}</TableCell>
                        <TableCell numeric>{n.protein}</TableCell>
                      </TableRow>
                    );
                  })}
                </Fragment>
              </TableBody>
            </Table>
          </div>
        </RctCollapsibleCard>
        <RctCollapsibleCard heading="Employee Payroll" fullBlock>
          <div className="table-responsive">
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Name</TableCell>
                  <TableCell>Designation</TableCell>
                  <TableCell>Salary</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                {employeePayroll && employeePayroll.map((employee, key) => (
                  <TableRow hover key={key}>
                    <TableCell>
                      <Media>
                        <Media left>
                          <Media object src={employee.employeeAvatar} alt="User Profile 1" className="rounded-circle mr-20" width="40" height="40" />
                        </Media>
                        <Media body><h5 className="m-0 pt-15">{employee.employeeName}</h5></Media>
                      </Media>
                    </TableCell>
                    <TableCell>{employee.designation}</TableCell>
                    <TableCell>${employee.salary}</TableCell>
                    {employee.status === 1 ?
                      <TableCell><span className="badge badge-success">Done</span></TableCell>
                      : <TableCell><span className="badge badge-warning">Pending</span></TableCell>
                    }
                    <TableCell>
                      <IconButton className="text-success" aria-label="Delete"><i className="zmdi zmdi-check-all"></i></IconButton>
                      <IconButton className="text-danger" aria-label="Add an alarm"><i className="zmdi zmdi-close"></i></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                </Fragment>
              </TableBody>
            </Table>
          </div>
        </RctCollapsibleCard>
        <RctCollapsibleCard heading="Contextual colored Table" fullBlock>
          <div className="table-responsive">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Invoice</TableCell>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Profitment</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className="table-primary">
                  <TableCell>#10001</TableCell>
                  <TableCell>INV-001001</TableCell>
                  <TableCell>Juan Rodriquez</TableCell>
                  <TableCell>$120.40</TableCell>
                  <TableCell><span className="badge badge-info badge-pill">Pending</span></TableCell>
                </TableRow>
                <TableRow className="table-secondary">
                  <TableCell>#10002</TableCell>
                  <TableCell>INV-001002</TableCell>
                  <TableCell>Grace Maldonado</TableCell>
                  <TableCell>$45.40</TableCell>
                  <TableCell><span className="badge badge-success badge-pill">Paid</span></TableCell>
                </TableRow>
                <TableRow className="table-success">
                  <TableCell>#10003</TableCell>
                  <TableCell>INV-001003</TableCell>
                  <TableCell>Johnny Gonzales</TableCell>
                  <TableCell>$45.40</TableCell>
                  <TableCell><span className="badge badge-danger badge-pill">Canceled</span></TableCell>
                </TableRow>
                <TableRow className="table-danger">
                  <TableCell>#10004</TableCell>
                  <TableCell>INV-001004</TableCell>
                  <TableCell>Juan Rodriquez</TableCell>
                  <TableCell>$155.40</TableCell>
                  <TableCell><span className="badge badge-info badge-pill">Pending</span></TableCell>
                </TableRow>
                <TableRow className="table-info">
                  <TableCell>#10002</TableCell>
                  <TableCell>INV-001002</TableCell>
                  <TableCell>Grace Maldonado</TableCell>
                  <TableCell>$45.40</TableCell>
                  <TableCell><span className="badge badge-success badge-pill">Paid</span></TableCell>
                </TableRow>
                <TableRow className="table-secondary">
                  <TableCell>#10003</TableCell>
                  <TableCell>INV-001003</TableCell>
                  <TableCell>Johnny Gonzales</TableCell>
                  <TableCell>$45.40</TableCell>
                  <TableCell><span className="badge badge-danger badge-pill">Canceled</span></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </RctCollapsibleCard>
      </div>
    );
  }
}

export default BasicTable;
