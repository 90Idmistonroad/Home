import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import './App.css';
import HomePage from './pages/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor () {
    super()

    // error handler on UI rendering failure
    this.onError = (e, componentStack) => {}

    // component to show if UI fails rendering
    this.fallbackComponent = ({ componentStack, error }) => (
      <h1 style={{ textAlign: 'center', marginTop: '0' }}>Something went wrong :(</h1>
    )
  }

  render () {
    return (
      <div style={{ height: '100vh' }}>
        <ErrorBoundary onError={this.onError} FallbackComponent={this.fallbackComponent} >
          <HomePage />
        </ErrorBoundary>
      </div>
    )
  }
}