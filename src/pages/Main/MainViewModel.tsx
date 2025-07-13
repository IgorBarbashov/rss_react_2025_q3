import { Component, type ContextType } from 'react';
import { Main } from './Main';
import type { MainViewModelProps, MainViewModelState } from './main.models';
import { type BookDto, bookService } from '@entities/Book';
import { normalizeSearchString, validateSearchString } from './main.helpers';
import { storage, STORAGE_KEYS, NotificationContext } from '@shared/libs';

export class MainViewModel extends Component<
  MainViewModelProps,
  MainViewModelState
> {
  static contextType = NotificationContext;

  declare context: ContextType<typeof NotificationContext>;

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

  componentDidMount() {
    const searchString = storage.getItem<string>(STORAGE_KEYS.SEARCH_STRING);

    if (searchString) {
      this.setState({ searchString });
    }
  }

  onSearchStringChange(searchString: string): void {
    this.setState({ searchString });
  }

  async onSearchButtonClick(): Promise<void> {
    const { showNotification } = this.context;

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
        normalizedSearchString
      );

      this.setState((prevState: MainViewModelState) => ({
        list,
        prevSearchString: prevState.searchString,
      }));

      storage.setItem(STORAGE_KEYS.SEARCH_STRING, normalizedSearchString);
    } catch (error) {
      showNotification((error as Error)?.message);
    } finally {
      this.setState({ isFetching: false });
    }
  }

  render() {
    const { list, searchString, isFetching } = this.state;

    return (
      <Main
        list={list}
        searchString={searchString}
        onSearchStringChange={this.onSearchStringChange}
        onSearchButtonClick={this.onSearchButtonClick}
        isFetching={isFetching}
      />
    );
  }
}
