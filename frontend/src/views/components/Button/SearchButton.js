import { useAppContext } from "../../../context/store";

import "./searchbutton.scss";

const SearchButton = () => {
  const store = useAppContext();
  const searchTerm = store.searchTerm;
  const fetchPersons = store.fetchPersons;

  return (
    <button className="search__button" onClick={() => fetchPersons(searchTerm)}>
      Search
    </button>
  );
};

export default SearchButton;
