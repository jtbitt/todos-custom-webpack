import { Component, ReactNode, ErrorInfo } from 'react';

import { Heading, Typography, Button } from '@components';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  public state: IErrorBoundaryState = {
    hasError: false,
  };

  private handleRefreshClick = () => {
    window.location.reload();
  };

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error: ', error, errorInfo);
  }

  public render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <>
          <Heading>Woops 🙈</Heading>
          <Typography align="center" variant="body2" gutterBottom>
            Something went wrong on our end, the below button is not AZ-5, what
            could go wrong...
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleRefreshClick}
          >
            Refresh
          </Button>
        </>
      );
    }

    return children;
  }
}
