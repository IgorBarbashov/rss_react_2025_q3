import { Component, type PropsWithChildren } from 'react';
import { NotificationContext } from './notification.context';
import type { NotificationProviderState } from './notification.models';

export class NotificationProvider extends Component<
  PropsWithChildren,
  NotificationProviderState
> {
  declare notificationTimerId: number | null;

  constructor(props: PropsWithChildren) {
    super(props);

    this.state = {
      notification: null,
    };

    this.notificationTimerId = null;
  }

  showNotification = (notification: string | null): void => {
    if (this.notificationTimerId !== null) {
      window.clearTimeout(this.notificationTimerId);
    }

    this.notificationTimerId = window.setTimeout(() => {
      this.setState({ notification: null });
    }, 2000);

    this.setState({ notification });
  };

  render() {
    const { notification } = this.state;

    return (
      <NotificationContext.Provider
        value={{
          notification,
          showNotification: this.showNotification,
        }}
      >
        {this.props.children}
      </NotificationContext.Provider>
    );
  }
}
