import { Component, type Context, type ContextType } from 'react';
import { NotificationContext } from './notification.context';
import type { NotificationContextType } from './notification.models';
import styles from './notification.module.scss';

export class Notification extends Component {
  static contextType: Context<NotificationContextType> = NotificationContext;

  declare context: ContextType<typeof NotificationContext>;

  render() {
    const { notification } = this.context;

    if (notification === null) {
      return null;
    }

    return (
      <div className={styles.container}>
        <div>{notification}</div>
      </div>
    );
  }
}
