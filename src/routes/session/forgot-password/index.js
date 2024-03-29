 /* eslint-disable */
import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';

// app config
import AppConfig from '../../../constants/AppConfig';

export default class Forgotpwd extends Component {
  render() {
    return (
      <QueueAnim type="bottom" duration={2000}>
        <div className="rct-session-wrapper" key="1">
          <AppBar position="static" className="session-header">
            <Toolbar>
              <div className="container">
                <div className="d-flex justify-content-between">
                  <div className="session-logo">
                    <Link to="/">
                      <img src={require('../../../assets/img/site-logo.png')} alt="session-logo" className="img-fluid" width="110" height="35" />
                    </Link>
                  </div>
                  <div className="session-social-icon">
                    <IconButton className="text-white" aria-label="facebook">
                      <i className="zmdi zmdi-facebook"></i>
                    </IconButton>
                    <IconButton className="text-white" aria-label="twitter">
                      <i className="zmdi zmdi-twitter"></i>
                    </IconButton>
                    <IconButton className="text-white" aria-label="google">
                      <i className="zmdi zmdi-google"></i>
                    </IconButton>
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <div className="session-inner-wrapper">
            <div className="row">
              <div className="col-sm-8 col-md-6 col-lg-5 mx-auto">
                <div className="session-body text-center">
                  <div className="session-head mb-30">
                    <h2>Get started with {AppConfig.brandName}</h2>
                    <p className="mb-0">Most powerful ReactJS admin panel</p>
                  </div>
                  <Form>
                    <FormGroup className="has-wrapper">
                      <Input type="mail" name="user-mail" id="user-mail" className="has-input input-lg" placeholder="Enter Email Address" onChange={(event) => this.setState({ email: event.target.value })} />
                      <span className="has-icon"><i className="ti-email"></i></span>
                    </FormGroup>
                    <FormGroup>
                      <Button raised="true" className="btn-success text-white btn-block btn-large">Reset Password</Button>
                    </FormGroup>
                    <Button component={Link} to="/session/login" outline className="btn-dark btn-block btn-large text-white">Already having account?  Login</Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </QueueAnim>
    );
  }
}
