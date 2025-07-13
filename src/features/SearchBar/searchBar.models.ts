export interface SearchBarProps {
  searchString: string;
  onSearchStringChange: (searchString: string) => void;
  onSearchButtonClick: () => void;
}
