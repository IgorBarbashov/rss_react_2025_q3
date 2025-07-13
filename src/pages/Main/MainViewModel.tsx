import { Component } from 'react';
import { Main } from './Main';
import type { MainViewModelProps, MainViewModelState } from './main.models.ts';
import { bookService } from '@entities/Book';

export class MainViewModel extends Component<
  MainViewModelProps,
  MainViewModelState
> {
  constructor(props: MainViewModelProps) {
    super(props);

    this.state = {
      list: [],
      searchString: '',
      isFetching: false,
    };
  }

  onSearchStringChange = (searchString: string): void => {
    this.setState({ searchString });
  };

  onSearchButtonClick = (): void => {
    bookService.searchBooks(this.state.searchString);
    // set isLoading
    // trim
    // check for changes
    // fetch
    // clear searchString
    // setState
  };

  render() {
    const { list, searchString } = this.state;

    return (
      <Main
        list={list}
        searchString={searchString}
        onSearchStringChange={this.onSearchStringChange}
        onSearchButtonClick={this.onSearchButtonClick}
      />
    );
  }
}
