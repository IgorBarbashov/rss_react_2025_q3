import { Component } from 'react';
import { Main } from './Main';
import type { MainViewModelProps, MainViewModelState } from './main.models.ts';
import { type BookDto, bookService } from '@entities/Book';
import { normalizeSearchString, validateSearchString } from './main.helpers.ts';

export class MainViewModel extends Component<
  MainViewModelProps,
  MainViewModelState
> {
  constructor(props: MainViewModelProps) {
    super(props);

    this.state = {
      list: [],
      searchString: '',
      prevSearchString: '',
      isFetching: false,
    };

    this.onSearchStringChange = this.onSearchStringChange.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
  }

  onSearchStringChange(searchString: string): void {
    this.setState({ searchString });
  }

  async onSearchButtonClick(): Promise<void> {
    const normalizedSearchString = normalizeSearchString(
      this.state.searchString
    );

    const isSearchStringValid = validateSearchString(
      normalizedSearchString,
      this.state.prevSearchString
    );

    if (!isSearchStringValid) {
      return;
    }

    this.setState({ isFetching: true });

    try {
      const list: BookDto[] = await bookService.searchBooks(
        this.state.searchString
      );

      this.setState((prevState: MainViewModelState) => ({
        list,
        prevSearchString: prevState.searchString,
        isFetching: false,
      }));

      // save to localStorage
    } catch (error) {
      console.error((error as Error)?.message);
    }
  }

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
