import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import * as actions from './actions/action';
import { action_types } from './actions/constants';

class App extends Component {

  componentDidMount() {
    this.props.updateReducer(action_types.LOADER, false);
  }

  render() {
    return (
      <div>Hello</div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  actions
)(withRouter(App));
