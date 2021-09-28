import SearchButton from "../../components/Button/SearchButton";
import SearchInput from "../../components/SearchInput/SearchInput";
import logo from "../../../assets/tesodevlogo.jpg";

import "./searchresults.scss";

const SearchResults = () => {
  return (
    <div className="search-results__container">
      <div className="search-results__container__top">
        <img src={logo} />
        <div>
          <SearchInput />
          <SearchButton />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
