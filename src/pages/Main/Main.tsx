import { Component } from 'react';
import { SearchBar } from '@features/SearchBar';
import { BookList } from '@features/BookList';
import type { MainProps } from './main.models.ts';

export class Main extends Component<MainProps> {
  render() {
    const { list, searchString, onSearchStringChange, onSearchButtonClick } =
      this.props;

    return (
      <div>
        <SearchBar
          searchString={searchString}
          onSearchStringChange={onSearchStringChange}
          onSearchButtonClick={onSearchButtonClick}
        />
        <BookList list={list} />
      </div>
    );
  }
}
