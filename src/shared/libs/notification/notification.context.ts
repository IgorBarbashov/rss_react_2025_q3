import { createContext } from 'react';
import type { NotificationContextType } from './notification.models';

const defaultValue: NotificationContextType = {
  notification: null,
  showNotification: () => {},
};

export const NotificationContext =
  createContext<NotificationContextType>(defaultValue);
