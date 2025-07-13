import { Component } from 'react';
import { MainViewModel } from '@pages/Main';
import { NotificationProvider, Notification } from '@shared/libs';

export class App extends Component {
  render() {
    return (
      <NotificationProvider>
        <MainViewModel />
        <Notification />
      </NotificationProvider>
    );
  }
}
