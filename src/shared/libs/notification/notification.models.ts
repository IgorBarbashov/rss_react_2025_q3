export interface NotificationContextType {
  notification: string | null;
  showNotification: (message: string | null) => void;
}

export interface NotificationProviderState {
  notification: string | null;
}
