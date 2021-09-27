import SearchButton from "../../components/Button/SearchButton";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./searchBar.scss";

const SearchBar = () => {
  return (
    <form className="search-bar-form">
      <SearchInput />
      <SearchButton />
    </form>
  );
};

export default SearchBar;
