import React, { Component } from 'react';
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';
//import LoadingComponent from 'components/LoadingComponent';
import History from 'utils/history-utils';

// import Home from 'containers/StudentPage';
import Login from 'containers/Login/index';
export const pathArr = [
  '/login',
];
export default class RouterComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    window.scroll(0, 0);
  }
  excludedPaths = () => {
    const path = pathArr.filter(item => window.location.href.indexOf(item) != -1).length > 0;
    return !path;
  };
  render() {
    const { match } = this.props;
    if (!this.props.isAuthendicated&&this.excludedPaths()) {
      return <Redirect to="/login" />;
    }
    if (this.props.isAuthendicated&&window.location.pathname=='/') {
      return <Redirect to="/home" />;
    }
    return (
      <Switch>
        <Route path={`${match.path}login`} component={Login} />
        {/*<Route path={`${match.path}home`} component={Home} />*/}
      </Switch>
    );
  }
}
