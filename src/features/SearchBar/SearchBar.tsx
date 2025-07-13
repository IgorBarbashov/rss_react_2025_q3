import { type ChangeEvent, PureComponent } from 'react';
import type { SearchBarProps } from './searchBar.models';

export class SearchBar extends PureComponent<SearchBarProps> {
  onSearchStringChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onSearchStringChange(e.target.value);
  };

  render() {
    const { searchString, onSearchButtonClick, isFetching } = this.props;

    return (
      <div>
        <input
          value={searchString}
          onChange={this.onSearchStringChangeHandler}
          disabled={isFetching}
        />
        <button onClick={onSearchButtonClick} disabled={isFetching}>
          Искать
        </button>
      </div>
    );
  }
}
