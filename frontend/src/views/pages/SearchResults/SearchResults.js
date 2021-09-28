import SearchBar from "../../layouts/SearchBar/SearchBar";
import logo from "../../../assets/tesodevlogo.jpg";

import "./searchresults.scss";

const SearchResults = () => {
  return (
    <div className="search-results__container">
      <div className="search-results__container__wrapper">
        <div className="search-results__container__wrapper__left">
          <img src={logo} />
        </div>
        <div className="search-results__container__wrapper__right">
          <div className="search-results__container__wrapper__right__search">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
