import { Component } from 'react';
import type { CrashAppProps, CrashAppState } from './crashApp.models';
import styles from './crashApp.module.scss';

export class CrashApp extends Component<CrashAppProps, CrashAppState> {
  constructor(props: CrashAppProps) {
    super(props);

    this.state = {
      isCrashed: {
        reason: 'unknown',
      },
    };
  }

  onClickHandler = () => {
    this.setState({ isCrashed: null });
  };

  render() {
    const { isCrashed } = this.state;

    return (
      (isCrashed as unknown as { reason: string }).reason && (
        <div className={styles.container}>
          <button onClick={this.onClickHandler}>CrashApp</button>
        </div>
      )
    );
  }
}
