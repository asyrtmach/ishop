import React, { Component } from 'react';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {
      return <h1>Опаньки!</h1>
    }

    return this.props.children;
  }
}