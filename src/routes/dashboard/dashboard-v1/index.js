/**
 * Dashboard V1
 */
/* eslint-disable */
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardLink, CardGroup, CardImgOverlay } from 'reactstrap';

// Widgets
import TotalEarnsWithAreaChartWidget from '../../../components/Widgets/TotalEarnsWithAreaChart';

import TotalSalesWidget from '../../../components/Widgets/TotalSales';
import NetProfitWidget from '../../../components/Widgets/NetProfit';
import TaxStatsWidget from '../../../components/Widgets/TaxStats';
import ExpensesWidget from '../../../components/Widgets/Expenses';
import OverallTrafficStatusWidget from '../../../components/Widgets/OverallTrafficStatus';

import ToDoListWidget from '../../../components/Widgets/ToDoList';
import NewCustomersWidget from '../../../components/Widgets/NewCustomers';
import Notifications from '../../../components/Widgets/Notifications';

import OrderStatusWidget from '../../../components/Widgets/OrderStatus';

import NewEmailsWidget from '../../../components/Widgets/NewEmails';
import EmployeePayrollWidget from '../../../components/Widgets/EmployeePayroll';

import SocialFeedsWidget from '../../../components/Widgets/SocialFeeds';

// page title bar
import PageTitleBar from '../../../components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from '../../../util/IntlMessages';

// rct card box
import RctCollapsibleCard from '../../../components/RctCollapsibleCard/RctCollapsibleCard';

// dashboard data
import {
  totalEarns,
  todoData,
  newCustomers,
  messages,
  notificationTypes,
  notifications,
  ordersStatus,
  newEmails,
  employeePayroll,
  feeds,
  trafficStatus,
  totalSales,
  netProfit,
  taxStats,
  expenses
} from './data';

// Main Component
export default class DashboardOne extends Component {
  render() {
    return (
      <div className="dashboard-v1">
        <div className="page-title d-sm-flex justify-content-between align-items-center">
                <div className="page-title-wrap">
                    <h2 className="">Dashboard</h2>
                </div>
        </div>

        <RctCollapsibleCard>
        <div className={'rct-block-title'}>
                    <h4><b>Dashboard</b></h4>
                    
                </div>
        </RctCollapsibleCard>
        <div className="row">
              <div className="col-sm-12 col-md-4 mb-30">
                <Card body>
                  <CardTitle>Clientes</CardTitle>
                  <CardText>Semanal, mensual</CardText>
                </Card>
              </div>
              <div className="col-sm-12 col-md-4 mb-30">
              <Card body>
                  <CardTitle>Usuarios</CardTitle>
                  <CardText>Hoy, Totales</CardText>
                </Card>
              </div>
              <div className="col-sm-12 col-md-4 mb-30">
              <Card body>
                  <CardTitle>Tags Audiovisuales</CardTitle>
                  <CardText>Hoy, Totales</CardText>
                </Card>
              </div>
            </div>
        
       
      </div>
    );
  }
}
