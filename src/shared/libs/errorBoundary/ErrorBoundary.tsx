import { Component, type ErrorInfo, type PropsWithChildren } from 'react';
import type {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from './errorBoundary.models';
import styles from './errorBoundary.module.scss';

export class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.group('Error Boundary logs');
    console.error(error);
    console.error(errorInfo);
    console.groupEnd();
  }

  onResetErrorClickHandler = () => {
    this.setState({ error: null });
  };

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <>
          <div className={styles.container}>
            <div>Error Boundary interface</div>
            <div>See console in Chrome Developer Tools for details</div>
            <button onClick={this.onResetErrorClickHandler}>Reset error</button>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}
