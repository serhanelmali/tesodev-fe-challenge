import { useAppContext } from "../../../context/store";
import { Link } from "react-router-dom";
import PersonInfo from "../../components/PersonInfo/PersonInfo";
import "./searchresultspreview.scss";

const SearchResultsPreview = () => {
  const store = useAppContext();
  const persons = store?.persons.data;

  return (
    <div
      className="search-results-preview__container"
      style={persons.length <= 0 ? { opacity: 0 } : { opacity: 1 }}
    >
      <div className="search-results-preview__container__wrapper">
        <div className="search-results-preview__container__wrapper__person-list">
          {persons &&
            persons
              .slice(0, 3)
              .map((person, id) => (
                <PersonInfo
                  country={person.country}
                  city={person.city}
                  email={person.email}
                  fullname={person.fullname}
                  date={person.date}
                  key={id}
                />
              ))}

          <Link to="/searchresults">Show more...</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPreview;
