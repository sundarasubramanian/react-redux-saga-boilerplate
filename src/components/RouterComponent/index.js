import React, { Component } from 'react';
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';
//import LoadingComponent from 'components/LoadingComponent';

import Home from 'containers/Home';

export default class MeksiRouter extends Component {
  constructor(props) {
    super(props);
  }

  // excludedPaths = () => {
  //     const path = pathArr.filter(item => window.location.href.indexOf(item) != -1).length > 0;
  //     return !path;
  // };

  componentDidUpdate() {
    window.scroll(0, 0);
  }

  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route path={`${match.path}`} component={Home} />
      </Switch>
    );
  }
}
