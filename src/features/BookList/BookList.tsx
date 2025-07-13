import { PureComponent } from 'react';
import type { BookListProps } from './bookList.model.ts';

export class BookList extends PureComponent<BookListProps> {
  render() {
    const { isFetching } = this.props;

    return (
      <>
        {isFetching && <div>Loading...</div>}
        <div>BookList</div>
      </>
    );
  }
}
