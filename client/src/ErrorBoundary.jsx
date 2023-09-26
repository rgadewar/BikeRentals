import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show that an error occurred.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error here if needed.
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message here.
      return <p>Something went wrong. Please try again later.</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
