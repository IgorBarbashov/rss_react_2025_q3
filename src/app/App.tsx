import { Component } from 'react';
import { MainViewModel } from '@pages/Main';
import {
  NotificationProvider,
  Notification,
  ErrorBoundary,
} from '@shared/libs';
import { CrashApp } from '@features/CrashApp';

export class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <NotificationProvider>
          <MainViewModel />
          <CrashApp />
          <Notification />
        </NotificationProvider>
      </ErrorBoundary>
    );
  }
}
