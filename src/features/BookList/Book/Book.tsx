import { PureComponent } from 'react';
import type { BookProps } from './book.model';
import styles from './book.module.scss';

export class Book extends PureComponent<BookProps> {
  render() {
    const {
      book: { title, first_publish_year, author_name },
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.year}>{first_publish_year}</div>
        <div className={styles.author}>{author_name}</div>
      </div>
    );
  }
}
