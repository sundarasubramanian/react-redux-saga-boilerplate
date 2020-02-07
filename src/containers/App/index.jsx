import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Router, Switch, Route, Redirect } from 'react-router-dom';

import { compose } from 'redux';
import { injectReducer, injectSaga } from 'redux-inject-reducer-and-saga';
import { createStructuredSelector } from 'reselect';
import History from 'utils/history-utils';
import * as actions from './actions';

import * as selectors from './selectors';

import AppReducer from './reducer';
import AppSaga from './sagas';
import Home from 'containers/Home'

class App extends Component {
  constructor(props) {
    super(props);
  }
componentDidMount(){
  this.props.getEmployeesDetails();
}
  render() {
    return (

      <Router history={History}>
        <React.Fragment>
          <Switch>
            <Route
              render={props => (
                <Home
                  {...props}
                  selectEmployeesDetails={this.props.selectEmployeesDetails}
                />
              )}
              path="/home"
            />
          </Switch>
        </React.Fragment>
      </Router>
      
    );
  }
}
function mapStateToProps(state) {
  return createStructuredSelector({
    selectEmployeesDetails: selectors.selectEmployeesDetails(),
  
  });
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployeesDetails: () => {
      dispatch(actions.getEmployeesDetails());
    },
   
  };
}

const withReducer = injectReducer({ key: 'employees',  reducer:AppReducer });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'employees',  saga:AppSaga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
