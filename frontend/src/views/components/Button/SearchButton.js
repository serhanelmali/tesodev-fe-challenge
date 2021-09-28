import { useAppContext } from "../../../context/store";

import "./searchButton.scss";

const SearchButton = () => {
  const store = useAppContext();
  const searchTerm = store.searchTerm;
  const fetchPersons = store.fetchPersons;

  return <button onClick={() => fetchPersons(searchTerm)}>Search</button>;
};

export default SearchButton;
