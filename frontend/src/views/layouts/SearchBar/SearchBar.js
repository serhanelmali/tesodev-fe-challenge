import SearchButton from "../../components/Button/SearchButton";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./searchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <SearchInput />
      <SearchButton />
    </div>
  );
};

export default SearchBar;
