import { useAppContext } from "../../../context/store";
import PersonInfo from "../../components/PersonInfo/PersonInfo";
import SearchBar from "../../layouts/SearchBar/SearchBar";
import logo from "../../../assets/tesodevlogo.jpg";

import "./searchresults.scss";

const SearchResults = () => {
  const store = useAppContext();
  const currentPersons = store?.currentPersons;

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
          <div className="search-result__container__wrapper__right__person-list">
            {currentPersons &&
              currentPersons.map((person, id) => (
                <PersonInfo
                  country={person.country}
                  city={person.city}
                  email={person.email}
                  fullname={person.fullname}
                  date={person.date}
                  key={id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
