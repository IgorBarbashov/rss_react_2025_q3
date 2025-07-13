import { Component } from 'react';
import { SearchBar } from '@features/SearchBar';
import { BookList } from '@features/BookList';
import type { MainProps } from './main.models';

export class Main extends Component<MainProps> {
  render() {
    const {
      list,
      searchString,
      onSearchStringChange,
      onSearchButtonClick,
      isFetching,
    } = this.props;

    return (
      <div>
        <SearchBar
          searchString={searchString}
          onSearchStringChange={onSearchStringChange}
          onSearchButtonClick={onSearchButtonClick}
          isFetching={isFetching}
        />
        <BookList list={list} isFetching={isFetching} />
      </div>
    );
  }
}
