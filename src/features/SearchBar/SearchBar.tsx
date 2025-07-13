import { type ChangeEvent, PureComponent } from 'react';
import type { SearchBarProps } from './searchBar.models';

export class SearchBar extends PureComponent<SearchBarProps> {
  onSearchStringChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onSearchStringChange(e.target.value);
  };

  render() {
    const { searchString, onSearchButtonClick } = this.props;

    return (
      <div>
        <input
          value={searchString}
          onChange={this.onSearchStringChangeHandler}
        />
        <button onClick={onSearchButtonClick}>Искать</button>
      </div>
    );
  }
}
