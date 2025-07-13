import { PureComponent } from 'react';
import { Book } from './Book';
import type { BookListProps } from './bookList.model';
import styles from './bookList.module.scss';

export class BookList extends PureComponent<BookListProps> {
  render() {
    const { list, isFetching } = this.props;

    return (
      <div className={styles.container}>
        {!isFetching && !list.length ? (
          <div className={styles.noData}>Нет данных</div>
        ) : (
          <div className={isFetching ? styles.listContainer : ''}>
            {list.map((book) => (
              <Book key={book.key} book={book} />
            ))}
          </div>
        )}

        {isFetching && <div className={styles.loader}>Loading...</div>}
      </div>
    );
  }
}
